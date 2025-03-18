import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from 'primereact/sidebar';
import { useCart, CartProvider } from '@/Components/Shop/CartContext';
import { Link } from '@inertiajs/react';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import QRCode from 'react-qr-code';
import { Dialog } from 'primereact/dialog';

const ShopLayout = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [cartName, setCartName] = useState('');
    const [showShareDialog, setShowShareDialog] = useState(false);
    const [shareUrl, setShareUrl] = useState('');
    const { cart, loading, updateCartName, clearCart, createOrder, getShareLink,fetchCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // LocalStorage'dan sepet ismini al
        const storedCartName = localStorage.getItem('cart_name');
        if (storedCartName) {
            setCartName(storedCartName);
        }
    }, []);

    useEffect(() => {
        // Cart'tan gelen ismi state'e ve localStorage'a kaydet
        if (cart?.cart_name) {
            setCartName(cart.cart_name);
            localStorage.setItem('cart_name', cart.cart_name);
        }
    }, [cart?.cart_name]);

    const handleCartNameChange = async (e) => {
        const newName = e.target.value;
        setCartName(newName);
        localStorage.setItem('cart_name', newName);
    };

    const handleSaveCartName = async () => {
        if (!cartName.trim()) return;
        try {
            await updateCartName(cartName);
            await fetchCart(); // Sepeti yenile
            localStorage.setItem('cart_name', cartName);
        } catch (error) {
            console.error('Sepet ismi güncellenirken hata oluştu:', error);
        }
    };

    const handleShareCart = async () => {
        try {
            const response = await getShareLink();
            setShareUrl(response.share_url);
            setShowShareDialog(true);
        } catch (error) {
            console.error('Paylaşım linki alınırken hata oluştu:', error);
        }
    };

    const handleWhatsAppOrder = async () => {
        try {
            const shareResponse = await getShareLink();

            const message = encodeURIComponent(
                `Merhaba Zeon MOTO, sepetim linktedir dönüşünüzü bekliyor olacağım\n\n${shareResponse.share_url}`
            );

            window.open(`https://wa.me/905070004777?text=${message}`, '_blank');
            await fetchCart();
        } catch (error) {
            console.error('WhatsApp siparişi oluşturulurken hata oluştu:', error);
        }
    };

    const handleClearCart = async () => {
        if (!window.confirm('Sepetinizi boşaltmak istediğinize emin misiniz?')) {
            return;
        }

        try {
            await clearCart();
        } catch (error) {
            console.error('Sepet boşaltılırken hata oluştu:', error);
        }
    };

    const calculateTotal = () => {
        if (!cart || !cart.items || cart.items.length === 0) return 0;
        return cart.items.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Navbar */}
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <Link href={route('new-shop.index')} className="flex items-center space-x-2">
                                <img src="/logo.png" alt="Zeon Moto" className="h-10 w-10" />
                                <span className="text-xl font-bold text-yellow-600">ZEON MOTO</span>
                            </Link>

                            <div className="flex items-center space-x-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowCart(true)}
                                    className="relative p-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    {cart && cart.items && cart.items.length > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                                        >
                                            {cart.items.length}
                                        </motion.span>
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.nav>

                {/* Main Content */}
                <main className="pt-16">
                    {children}
                </main>

                {/* Cart Sidebar */}
                <Sidebar
                    visible={showCart}
                    position="right"
                    header={<div className="flex items-center justify-between ">
                        <h2 className="text-xl font-semibold text-gray-800">Sepetim</h2>
                    </div>}
                    onHide={() => setShowCart(false)}
                    className="w-full sm:w-[400px]"
                >
                    {/* Sepet İsmi Input */}

                    <div className="h-full flex flex-col">
                        <div className="shadow-sm">
                            <div className="px-4 py-3">
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-4">
                                        <label htmlFor="cart_name" className="text-sm font-medium text-gray-700 whitespace-nowrap">
                                            Sepet İsmi:
                                        </label>
                                        <input
                                            type="text"
                                            id="cart_name"
                                            value={cartName}
                                            onChange={handleCartNameChange}
                                            placeholder="Sepetinize bir isim verin..."
                                            className="flex-1 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm text-sm"
                                        />
                                    </div>
                                    <button
                                        onClick={handleSaveCartName}
                                        disabled={!cartName.trim()}
                                        className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md font-medium hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                    >
                                        Kaydet
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4">
                            {loading ? (
                                <div className="flex items-center justify-center h-full">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
                                </div>
                            ) : !cart || !cart.items || cart.items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                    <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <p>Sepetiniz boş</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {cart.items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
                                        >
                                            <img
                                                src={item.product.images[0] || "/logo.png"}
                                                alt={item.product.name}
                                                className="w-20 h-20 object-cover rounded-md"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-800">{item.product.name}</h3>
                                                <p className="text-sm text-gray-500">#{item.product.sku}</p>
                                                <div className="mt-2 flex items-center space-x-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                        className="p-1 hover:bg-gray-100 rounded"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-gray-100 rounded"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-medium text-yellow-500">
                                                    {(item.product.price * item.quantity).toLocaleString('tr-TR')} {item.product.is_tl === 1 ? '₺' : '$'}
                                                </p>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="mt-2 text-red-500 hover:text-red-600 text-sm"
                                                >
                                                    Kaldır
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cart && cart.items && cart.items.length > 0 && (
                            <div className="border-t p-4 bg-white">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-600">Toplam</span>
                                    <span className="text-xl font-bold text-yellow-500">
                                        {calculateTotal().toLocaleString('tr-TR')} ₺
                                    </span>
                                </div>
                                <div className="mt-4 space-y-3">
                                    <button
                                        onClick={handleShareCart}
                                        className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md font-medium hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <i className="pi pi-link text-sm" />
                                        <span>Linki Kopyala</span>
                                    </button>

                                    <button
                                        onClick={handleWhatsAppOrder}
                                        className="w-full bg-green-500 text-white py-2 px-4 rounded-md font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <i className="pi pi-whatsapp text-sm" />
                                        <span>WhatsApp Sipariş</span>
                                    </button>

                                    <button
                                        onClick={handleClearCart}
                                        className="w-full bg-red-500 text-white py-2 px-4 rounded-md font-medium hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <i className="pi pi-trash text-sm" />
                                        <span>Sepeti Boşalt</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </Sidebar>

                {/* Paylaşım Dialog'u */}
                <Dialog
                    visible={showShareDialog}
                    onHide={() => setShowShareDialog(false)}
                    header="Sepet Paylaşım Linki"
                    className="w-[90vw] md:w-[600px]"
                >
                    <div className="space-y-6">
                        <div className="flex flex-col items-center justify-center p-4">
                            <QRCode value={shareUrl} size={200} />
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={shareUrl}
                                readOnly
                                className="flex-1 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md shadow-sm"
                            />
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(shareUrl);
                                    // TODO: Toast message ekle
                                }}
                                className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition-colors"
                            >
                                <i className="pi pi-copy text-sm" />
                            </button>
                        </div>
                    </div>
                </Dialog>

                {/* Footer */}
                <footer className="bg-gray-900 text-white mt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-yellow-500 mb-4">ZEON MOTO</h3>
                                <p className="text-gray-400">
                                    Motosiklet tutkunları için en kaliteli parçalar ve aksesuarlar.
                                </p>
                            </div>
                            <div></div>
                            <div>
                                <h3 className="text-lg font-semibold text-yellow-500 mb-4">İletişim</h3>
                                <ul className="space-y-2 text-gray-400">
                                    
                                    <li>Tel: 
                                        <a href="tel:+905070004777">+90 507 000 4777</a>
                                    </li>
                                    <li>Adres: NAMIK KEMAL MAH.MÜCAHİTLER CAD.NO:62 D:1 SEYHAN /ADANA</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; {new Date().getFullYear()} ZEON MOTO. Tüm hakları saklıdır.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ShopLayout;
