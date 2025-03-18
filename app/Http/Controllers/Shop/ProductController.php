<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query();
        $query->where('is_active', 1);
        // Kategori filtresi
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        // Fiyat filtresi
        if ($request->filled('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }
        if ($request->filled('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }

        // Arama filtresi
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('sku', 'like', "%{$search}%");
            });
        }

        // Sıralama
        $sortField = $request->input('sort_by', 'order');
        $sortOrder = $request->input('sort_order', 'desc');
        
        $allowedSortFields = ['name', 'price', 'created_at'];
        if (in_array($sortField, $allowedSortFields)) {
            $query->orderBy($sortField, $sortOrder);
        }

        // Stok durumu
        if ($request->boolean('in_stock')) {
            $query->where('stock', '>', 0);
        }

        $products = $query->paginate(12)->withQueryString();

        // Kategorileri ürün sayılarıyla birlikte al
        $categories = Category::getWithProductCounts();

        // Fiyat aralığını al
        $priceRange = [
            'min' => (int)Product::min('price') ?: 0,
            'max' => (int)Product::max('price') ?: 9999
        ];

        return Inertia::render('Shop/Index', [
            'products' => $products,
            'categories' => $categories->map(fn($category) => [
                'id' => $category->id,
                'name' => $category->name,
                'slug' => $category->name, // slug olarak name'i kullanıyoruz
                'products_count' => $category->products_count
            ]),
            'priceRange' => $priceRange,
            'filters' => [
                'category' => $request->category,
                'min_price' => (int)$request->input('min_price', $priceRange['min']),
                'max_price' => (int)$request->input('max_price', $priceRange['max']),
                'search' => $request->search,
                'sort_by' => $sortField,
                'sort_order' => $sortOrder,
                'in_stock' => $request->boolean('in_stock')
            ]
        ]);
    }

    public function categories()
    {
        $categories = Product::where('is_active', true)
            ->select('category')
            ->distinct()
            ->get()
            ->pluck('category');

        $products = Product::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->groupBy('category');

        return Inertia::render('Shop/Categories', [
            'categories' => $categories,
            'products' => $products
        ]);
    }

    public function newProducts(Request $request)
    {
        $products = Product::where('is_active', true)
            ->where('is_new', 1)
            ->orderBy('order')
            ->paginate(12)
            ->withQueryString();

        return Inertia::render('Shop/NewProducts', [
            'products' => $products
        ]);
    }

    public function discountedProducts(Request $request)
    {
        $products = Product::where('is_active', true)
            ->where('is_discount', 1)
            ->orderBy('order')
            ->paginate(12)
            ->withQueryString();

        return Inertia::render('Shop/DiscountedProducts', [
            'products' => $products
        ]);
    }

    public function show($sku)
    {
        $product = Product::where('sku', $sku)
            ->orWhere('uniqid', $sku)
            ->where('is_active', true)
            ->firstOrFail();

        return Inertia::render('Shop/Show', [
            'product' => $product
        ]);
    }
}
