<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CartController extends Controller
{
    private function getOrCreateCart(Request $request)
    {
        $sessionId = $request->session()->get('cart_session_id');
        
        if (!$sessionId) {
            $sessionId = Str::uuid();
            $request->session()->put('cart_session_id', $sessionId);
        }

        $cart = Cart::firstOrCreate(
            ['session_id' => $sessionId],
            ['user_id' => auth()->id()]
        );

        return $cart;
    }

    public function index()
    {
        $cart = $this->getOrCreateCart(request());
        $cart->load('items.product');

        return response()->json([
            'cart' => $cart,
            'total' => $cart->total
        ]);
    }

    public function addItem(Request $request)
    {
        $request->validate([
            'product_uniqid' => 'required|exists:products,uniqid',
            'quantity' => 'required|integer|min:1'
        ]);

        $cart = $this->getOrCreateCart($request);

        $existingItem = $cart->items()
            ->where('product_uniqid', $request->product_uniqid)
            ->first();

        if ($existingItem) {
            $existingItem->update([
                'quantity' => $existingItem->quantity + $request->quantity
            ]);
        } else {
            $cart->items()->create([
                'product_uniqid' => $request->product_uniqid,
                'quantity' => $request->quantity
            ]);
        }

        $cart->load('items.product');

        return response()->json([
            'message' => 'Ürün sepete eklendi',
            'cart' => $cart,
            'total' => $cart->total
        ]);
    }

    public function updateItem(Request $request, $id)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1'
        ]);

        $cart = $this->getOrCreateCart($request);
        $item = $cart->items()->findOrFail($id);

        $item->update([
            'quantity' => $request->quantity
        ]);

        $cart->load('items.product');

        return response()->json([
            'message' => 'Ürün güncellendi',
            'cart' => $cart,
            'total' => $cart->total
        ]);
    }

    public function updateCartName(Request $request)
    {
        $request->validate([
            'cart_name' => 'required|string|max:255'
        ]);

        $cart = $this->getOrCreateCart($request);
        
        $cart->update([
            'cart_name' => $request->cart_name
        ]);

        return response()->json([
            'message' => 'Sepet ismi güncellendi',
            'cart' => $cart
        ]);
    }

    public function removeItem(Request $request, $id)
    {
        $cart = $this->getOrCreateCart($request);
        $cart->items()->findOrFail($id)->delete();

        $cart->load('items.product');

        return response()->json([
            'message' => 'Ürün sepetten çıkarıldı',
            'cart' => $cart,
            'total' => $cart->total
        ]);
    }

    public function clearCart(Request $request)
    {
        $cart = $this->getOrCreateCart($request);
        $cart->items()->delete();
        
        return response()->json([
            'message' => 'Sepet boşaltıldı',
            'cart' => $cart
        ]);
    }

    public function createOrder(Request $request) 
    {
        $cart = $this->getOrCreateCart($request);
        
        // Sepet ismini güncelle
        $cart->update([
            'cart_name' => 'Tamamlandı-' . ($cart->cart_name ?? 'siparis'),
            'session_id' => $cart->session_id."-".Str::uuid()
        ]);
        
        // Yeni boş sepet oluştur
        $newCart = Cart::create([
            'session_id' => $request->session()->getId(),
            'user_id' => auth()->id()
        ]);
        
        return response()->json([
            'message' => 'Sipariş oluşturuldu',
            'old_cart' => $cart,
            'new_cart' => $newCart
        ]);
    }

    public function getShareLink(Request $request)
    {
        $cart = $this->getOrCreateCart($request);
        
        // Share token yoksa oluştur
        if (!$cart->share_token) {
            $cart->share_token = \Str::random(32);
            $cart->session_id = $cart->session_id."-".Str::uuid();
            $cart->save();
        }
        
        $shareUrl = url("/shop/cart/{$cart->share_token}");
        
        return response()->json([
            'message' => 'Paylaşım linki oluşturuldu',
            'share_url' => $shareUrl,
            'cart' => $cart
        ]);
    }

    public function viewSharedCart($token)
    {
        $cart = Cart::where('share_token', $token)->firstOrFail();
        
        return Inertia::render('Shop/SharedCart', [
            'cart' => $cart->load('items.product'),
            'total' => $cart->total
        ]);
    }
}
