<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use App\Models\Order;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->uuid('uid')->after('id')->nullable();
        });

        // Mevcut siparişlere UUID ata
        Order::whereNull('uid')->each(function ($order) {
            $order->update(['uid' => (string) Str::uuid()]);
        });

        // Unique constraint ekle
        Schema::table('orders', function (Blueprint $table) {
            $table->unique('uid');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropUnique(['uid']);
            $table->dropColumn('uid');
        });
    }
};
