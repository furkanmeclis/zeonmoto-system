<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PriceRuleController;
use Illuminate\Support\Facades\Artisan;

Route::get('/home', function () {
    return redirect()->route('new-shop.index');
})->name("home");
Route::get("/katalog", function () {
    return redirect()->route('new-shop.index');
})->name("katalog");
Route::get("/sepet", function () {
    return redirect()->route('new-shop.index');
})->name("cart");
Route::get('/anasayfa', [\App\Http\Controllers\HomeController::class, "index"])->middleware("only:admin,engineer,salesman")->name('dashboard');
Route::get('/', [App\Http\Controllers\Shop\ProductController::class, 'index'])->name('new-shop.index');
Route::get('/product/{uniqid}', [App\Http\Controllers\Shop\ProductController::class, 'show'])->name('new-shop.product.show');


Route::prefix('api')->group(function () {
    // Pin Routes
    Route::prefix('pin')->group(function () {
        Route::post('/check', [\App\Http\Controllers\PinController::class, 'checkPin'])->name('api.pin.check');
    });
    
    // Cart Routes
    Route::prefix('cart')->group(function () {
        Route::get('/', [App\Http\Controllers\Shop\CartController::class, 'index'])->name('api.cart.index');
        Route::post('/add', [App\Http\Controllers\Shop\CartController::class, 'addItem'])->name('api.cart.add');
        Route::put('/item/{id}', [App\Http\Controllers\Shop\CartController::class, 'updateItem'])->name('api.cart.update');
        Route::delete('/item/{id}', [App\Http\Controllers\Shop\CartController::class, 'removeItem'])->name('api.cart.remove');
        Route::put('/name', [App\Http\Controllers\Shop\CartController::class, 'updateCartName'])->name('api.cart.updateName');
        Route::delete('/clear', [App\Http\Controllers\Shop\CartController::class, 'clearCart'])->name('api.cart.clear');
        Route::post('/order', [App\Http\Controllers\Shop\CartController::class, 'createOrder'])->name('api.cart.order');
        Route::get('/share', [App\Http\Controllers\Shop\CartController::class, 'getShareLink'])->name('api.cart.share');
    });

    Route::post('/poison-motor/export',function (){
        $products = \App\Models\Product::poisonProducts();
        return response()->json([
            "products" => $products,
            "categories" => \App\Models\Category::all(),
        ]);
    })->name("api.poisonMotorExport");
    Route::post("/get-catalog-products", [\App\Http\Controllers\ApiController::class, "getCatalogProducts"])->name("api.getCatalogProducts");
    Route::post("/get-all-products", [\App\Http\Controllers\ApiController::class, "getAllProducts"])->name("api.getAllProducts");
    Route::post("/get-statics-data", [\App\Http\Controllers\ApiController::class, "getStatsData"])->name("api.getStatsData");
    Route::post("/get-query-page-metrics", [\App\Http\Controllers\ApiController::class, "getQueryPageMetrics"])->name("api.getQueryPageMetrics");
    Route::post("/get-tracking-code-set-packages", [\App\Http\Controllers\ApiController::class, "getTrackingCodeSetPackages"])->name("api.getTrackingCodeSetPackages");
    Route::post("/get-new-packages", [\App\Http\Controllers\ApiController::class, "getNewPackages"])->name("api.getNewPackages");
    Route::post("/get-customers", [\App\Http\Controllers\ApiController::class, "getCustomers"])->name("api.getCustomers");
    Route::post("/get-groups", [\App\Http\Controllers\ApiController::class, "getGroups"])->name("api.getGroups");
    Route::post("/orders", [\App\Http\Controllers\OrderController::class, "store"])->name("api.orders.store");
});

Route::get('/shop/cart/{token}', [App\Http\Controllers\Shop\CartController::class, 'viewSharedCart'])->name('shop.cart.shared');

Route::middleware('auth')->group(function () {
    Route::prefix("/pin")->name("pins.")->middleware("only:admin,engineer")->group(function () {
        Route::get("/", [\App\Http\Controllers\PinController::class, "index"])->name("index");
        Route::post("/store", [\App\Http\Controllers\PinController::class, "store"])->name("store");
        Route::put("/{id}/update", [\App\Http\Controllers\PinController::class, "update"])->name("update");
        Route::delete("/{id}/delete", [\App\Http\Controllers\PinController::class, "destroy"])->name("destroy");
    });
    Route::prefix("/kullanicilar")->name("users.")->middleware("only:admin,engineer")->group(function () {
        Route::get("/", [\App\Http\Controllers\UserController::class, "index"])->name("index");
        Route::get("/create", [\App\Http\Controllers\UserController::class, "create"])->name("create");
        Route::post("/create", [\App\Http\Controllers\UserController::class, "store"])->name("store");
        Route::get("/{id}/edit", [\App\Http\Controllers\UserController::class, "edit"])->name("edit");
        Route::put("/{id}/update", [\App\Http\Controllers\UserController::class, "update"])->name("update");
        Route::delete("/{id}/delete", [\App\Http\Controllers\UserController::class, "destroy"])->name("destroy");
    });
    Route::post("/reset-database", [\App\Http\Controllers\HomeController::class, "resetDatabase"])->name("resetDatabase");
    Route::post("/reset-images", [\App\Http\Controllers\HomeController::class, "resetImages"])->name("resetImages");
    Route::get('/profil', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profil', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profil', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::prefix('/urunler')->name('products.')->middleware("only:admin,engineer,salesman")->group(function () {
        Route::post("/sync-ckymotoservice",[\App\Http\Controllers\ProductController::class,"syncCkymotoservice"])->name("syncCkymotoservice");
        Route::get("/", [\App\Http\Controllers\ProductController::class, "index"])->name("index");
        Route::post("/create", [\App\Http\Controllers\ProductController::class, "store"])->name("store");
        Route::post('/update-order', [\App\Http\Controllers\ProductController::class, "updateOrder"])->name('updateOrder');
        Route::post('/update-is-active/{id}', [\App\Http\Controllers\ProductController::class, "updateIsActive"])->name('updateIsActive');
        Route::post('/create/category', [\App\Http\Controllers\ProductController::class, "storeCategory"])->name('storeCategory');
        Route::put('/update/category/{id}', [\App\Http\Controllers\ProductController::class, "updateCategory"])->name('updateCategory');
        Route::get("/{id}/get-images", [\App\Http\Controllers\ProductController::class, "getImages"])->name("getImages");
        Route::post("/{id}/upload-images", [\App\Http\Controllers\ProductController::class, "uploadImages"])->name("uploadImages");
        Route::put("/{id}/update", [\App\Http\Controllers\ProductController::class, "update"])->name("update");
        Route::delete("/{id}/delete", [\App\Http\Controllers\ProductController::class, "destroy"])->name("destroy");
        Route::delete("/{id}/delete/{name}", [\App\Http\Controllers\ProductController::class, "deleteImage"])->name("deleteImage");
        Route::delete("/delete/category/{id}", [\App\Http\Controllers\ProductController::class, "destroyCategory"])->name("destroyCategory");
    });
    Route::get('/urunler/katalog', [\App\Http\Controllers\ProductController::class, 'katalog'])->name("products.katalog")->middleware("only:admin,engineer,salesman,worker");
    Route::get('/price-rules', [PriceRuleController::class, 'index'])->name('price-rules.index');
    Route::post('/price-rules', [PriceRuleController::class, 'update'])->name('price-rules.update');
});

// Sitemap
Route::get('sitemap.xml', [App\Http\Controllers\SitemapController::class, 'index']);
Route::get('/migrate',function (){
    Artisan::call('migrate');
});
require __DIR__ . '/auth.php';
