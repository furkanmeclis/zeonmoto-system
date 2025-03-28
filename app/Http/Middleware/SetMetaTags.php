<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Models\Product;
use Symfony\Component\HttpFoundation\Response;

class SetMetaTags
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Varsayılan meta değerleri
        $meta = [
            'title' => 'Zeon Moto',
            'description' => 'Motosiklet yedek parçaları ve aksesuarları',
            'image' => '/logo.png',
            'keywords' => 'motosiklet, yedek parça, aksesuar, zeon moto',
            'ogTitle' => 'Zeon Moto',
            'ogDescription' => 'Motosiklet yedek parçaları ve aksesuarları',
            'ogImage' => '/logo.png',
            'ogUrl' => url()->current(),
            'canonicalUrl' => url()->current()
        ];
        
        // Route'a göre meta değerlerini değiştir
        $routeName = $request->route()->getName();
        
        if ($routeName === 'new-shop.product.show') {
            $productUniqid = $request->route('uniqid');
            $product = Product::where('sku', $productUniqid)->first();
            
            if ($product) {
                $meta = [
                    'title' => $product->name . ' - Zeon Moto',
                    'description' => $product->description ?? 'Motosiklet yedek parçaları',
                    'image' => $product->images[0] ?? '/logo.png',
                    'keywords' => $product->category . ', ' . $product->name . ', motosiklet yedek parça',
                    'ogTitle' => $product->name . ' - Zeon Moto',
                    'ogDescription' => $product->description ?? 'Motosiklet yedek parçaları',
                    'ogImage' => $product->images[0] ?? '/logo.png',
                    'ogUrl' => url()->current(),
                    'canonicalUrl' => url()->current()
                ];
            }
        } elseif ($routeName === 'new-shop.index') {
            $meta = [
                'title' => 'Anasayfa - Zeon Moto',
                'description' => 'Zeon Moto - Motosiklet yedek parçaları ve aksesuarları',
                'image' => '/logo.png',
                'keywords' => 'motosiklet, yedek parça, aksesuar, zeon moto, anasayfa',
                'ogTitle' => 'Anasayfa - Zeon Moto',
                'ogDescription' => 'Zeon Moto - Motosiklet yedek parçaları ve aksesuarları',
                'ogImage' => '/logo.png',
                'ogUrl' => url()->current(),
                'canonicalUrl' => url()->current()
            ];
        }
        
        // Meta değerlerini view ile paylaş
        View::share('meta', $meta);
        
        return $next($request);
    }
}
