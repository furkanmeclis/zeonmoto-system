<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'uid',
        'customer_name',
        'customer_phone',
        'customer_email',
        'customer_address',
        'note',
        'items',
        'total_amount',
        'status'
    ];

    protected $casts = [
        'items' => 'array',
        'total_amount' => 'decimal:2'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($order) {
            $order->uid = (string) Str::uuid();
        });
    }

    public function getRouteKeyName()
    {
        return 'uid';
    }
}
