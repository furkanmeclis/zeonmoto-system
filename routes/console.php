<?php

use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

\Illuminate\Support\Facades\Schedule::call(function(){
    $ep = env("CKYMOTO_URL") . "api/poison-motor/export";
    try {
        $response = \Illuminate\Support\Facades\Http::post($ep);
        if ($response->successful()) {
            $response = $response->json();
            $products = $response['products'];
            $categories = $response['categories'];
            $resultProducts = Product::poisonProductsImport($products, false);
            $resultCategories = Category::poisonImportCategories($categories);
            \Illuminate\Support\Facades\Log::info("Products: " . $resultProducts['message']);
        } else {
            \Illuminate\Support\Facades\Log::error("Error: " . $response->body());
        }
    } catch (\Exception $e) {
        \Illuminate\Support\Facades\Log::error("Error: " . $e->getMessage());
    }
})->hourly();
