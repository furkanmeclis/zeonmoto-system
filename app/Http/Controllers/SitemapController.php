<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index()
    {
        $activeProducts = Product::where('is_active',1)->get()->map(function($product){
            return [
                'url' => route('new-shop.product.show', $product->sku),
                'lastmod' => $product->updated_at->toAtomString(),
                'changefreq' => 'daily',
                'priority' => 0.8
            ];
        });
        $products = Product::where('is_active', 1)
            ->select('sku', 'updated_at')
            ->orderBy('updated_at', 'desc')
            ->get();

        return response()
            ->view('sitemap', compact('products', 'activeProducts'))
            ->header('Content-Type', 'application/xml');
    }
}
