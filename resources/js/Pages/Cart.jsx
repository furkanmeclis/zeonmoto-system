import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { CartProvider } from 'react-use-cart';
import axios from 'axios';
import { router,Head } from '@inertiajs/react';

const CartContent = () => {
    const { items, removeItem, updateItemQuantity, cartTotal, emptyCart } = useCart();
    const fallbackImage = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
    const [step, setStep] = useState(1);
    const [orderData, setOrderData] = useState(null);
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('customerInfo');
        return savedData ? JSON.parse(savedData) : {
            customer_name: '',
            customer_phone: '',
            customer_email: '',
            customer_address: '',
            note: ''
        };
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formErrors, setFormErrors] = useState({});

    const formatPrice = (price) => {
        return Number(price).toFixed(2);
    };

    const sendWhatsAppOrder = () => {
        let message = "Merhaba, aşağıdaki ürünleri sipariş etmek istiyorum:\n\n";
        message += "*Ürünler*\n\n";
        
        items.forEach(item => {
            message += `${item.sku} - ${item.name}\n`;
            message += `Adet: ${item.quantity}\n\n`;
        });

        const whatsappNumber = "905458870147";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const validateForm = () => {
        const errors = {};
        
        if (!formData.customer_name.trim()) {
            errors.customer_name = 'Ad Soyad alanı zorunludur';
        }
        
        if (!formData.customer_phone.trim()) {
            errors.customer_phone = 'Telefon numarası zorunludur';
        } else if (!/^[0-9]{10,11}$/.test(formData.customer_phone.replace(/[^0-9]/g, ''))) {
            errors.customer_phone = 'Geçerli bir telefon numarası giriniz';
        }
        
        if (formData.customer_email && !/\S+@\S+\.\S+/.test(formData.customer_email)) {
            errors.customer_email = 'Geçerli bir e-posta adresi giriniz';
        }
        
        if (!formData.customer_address.trim()) {
            errors.customer_address = 'Adres alanı zorunludur';
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newFormData = {
            ...formData,
            [name]: value
        };
        setFormData(newFormData);
        localStorage.setItem('customerInfo', JSON.stringify(newFormData));
        
        // Anlık validasyon hatasını temizle
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const orderData = {
                ...formData,
                items: items.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    sku: item.sku
                })),
                total_amount: cartTotal
            };

            const response = await axios.post('/api/orders', orderData);
            
            if (response.data.status) {
                setOrderData(response.data.data);
                setStep(3);
                setTimeout(() => {
                    emptyCart();
                }, 5000);
            } else {
                setError('Sipariş oluşturulurken bir hata oluştu.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    };

    const renderCartItems = () => (
        <div className="space-y-6">
            {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="relative h-48 md:h-32 w-full md:w-32 flex-shrink-0 overflow-hidden rounded-lg">
                            <img
                                src={item.image || fallbackImage}
                                alt={item.name}
                                className="h-full w-full object-contain"
                                onError={(e) => e.target.src = fallbackImage}
                            />
                        </div>
                        <div className="flex flex-1 flex-col">
                            <div>
                                <div className="flex flex-wrap justify-between gap-2">
                                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                                    <p className="text-gray-900">{formatPrice(item.price)} TL</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.sku}</p>
                            </div>
                            <div className="flex flex-1 flex-col md:flex-row md:items-end justify-between gap-4 mt-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        className="p-2 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
                                    >
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <span className="text-gray-900 font-medium text-lg px-4">{item.quantity}</span>
                                    <button
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        className="p-2 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
                                    >
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-sm font-medium text-red-600 hover:text-red-500"
                                >
                                    Kaldır
                                </button>
                            </div>
                            <div className="mt-3 text-sm text-gray-500">
                                Toplam: {formatPrice(item.quantity * item.price)} TL
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderCustomerForm = () => (
        <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Müşteri Bilgileri</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="customer_name" className="block text-sm font-medium text-gray-700">
                        Ad Soyad *
                    </label>
                    <input
                        type="text"
                        id="customer_name"
                        name="customer_name"
                        value={formData.customer_name}
                        onChange={handleInputChange}
                        required
                        className={`mt-1 block w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${
                            formErrors.customer_name ? 'border-red-300' : 'border-gray-300'
                        }`}
                    />
                    {formErrors.customer_name && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.customer_name}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="customer_phone" className="block text-sm font-medium text-gray-700">
                        Telefon Numarası *
                    </label>
                    <input
                        type="tel"
                        id="customer_phone"
                        name="customer_phone"
                        value={formData.customer_phone}
                        onChange={handleInputChange}
                        required
                        placeholder="05XX XXX XX XX"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${
                            formErrors.customer_phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                    />
                    {formErrors.customer_phone && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.customer_phone}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="customer_email" className="block text-sm font-medium text-gray-700">
                        E-posta
                    </label>
                    <input
                        type="email"
                        id="customer_email"
                        name="customer_email"
                        value={formData.customer_email}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${
                            formErrors.customer_email ? 'border-red-300' : 'border-gray-300'
                        }`}
                    />
                    {formErrors.customer_email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.customer_email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="customer_address" className="block text-sm font-medium text-gray-700">
                        Adres *
                    </label>
                    <textarea
                        id="customer_address"
                        name="customer_address"
                        value={formData.customer_address}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className={`mt-1 block w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${
                            formErrors.customer_address ? 'border-red-300' : 'border-gray-300'
                        }`}
                    />
                    {formErrors.customer_address && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.customer_address}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                        Sipariş Notu
                    </label>
                    <textarea
                        id="note"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    />
                </div>

                {error && (
                    <div className="rounded-md bg-red-50 p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-red-800">
                                    {error}
                                </h3>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );

    const renderSuccessScreen = () => (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-green-100 p-3 mb-4">
                <svg className="w-16 h-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Siparişiniz Alınmıştır</h2>
            <p className="text-gray-600 mb-8">En kısa sürede sizinle iletişime geçilecektir.</p>
            
            <div className="space-y-4">
                {orderData?.pdf_url && (
                    <a
                        href={orderData.pdf_url}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Sipariş Fişini Görüntüle
                    </a>
                )}
            
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Sepetim" />
            <Navbar />
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-6">
                            {step === 3 ? (
                                renderSuccessScreen()
                            ) : (
                                <>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Sepetim</h1>
                                    
                                    {items.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-12">
                                            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                            <p className="text-xl font-medium text-gray-900">Sepetiniz boş</p>
                                            <p className="mt-2 text-gray-500">Alışverişe başlamak için ürün ekleyin</p>
                                            <a
                                                href="/"
                                                className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors"
                                            >
                                                Alışverişe Başla
                                            </a>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                            <div className="lg:col-span-2">
                                                {step === 1 ? renderCartItems() : renderCustomerForm()}
                                            </div>
                                            <div className="lg:col-span-1">
                                                <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                                                    <h2 className="text-lg font-medium text-gray-900 mb-6">Sipariş Özeti</h2>
                                                    <div className="space-y-4">
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <p>Ara Toplam</p>
                                                            <p>{formatPrice(cartTotal)} TL</p>
                                                        </div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <p>KDV</p>
                                                            <p>{formatPrice(cartTotal * 0.18)} TL</p>
                                                        </div>
                                                        <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                                                            <p>Toplam</p>
                                                            <p>{formatPrice(cartTotal * 1.18)} TL</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="mt-6 space-y-3">
                                                        {step === 1 ? (
                                                            <>
                                                                <button
                                                                    onClick={() => setStep(2)}
                                                                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                                                                >
                                                                    Devam Et
                                                                </button>
                                                                <button
                                                                    onClick={sendWhatsAppOrder}
                                                                    className="w-full flex justify-center items-center gap-2 px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                                                                >
                                                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                                                    </svg>
                                                                    WhatsApp ile Hızlı Sipariş
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    type="button"
                                                                    onClick={handleSubmit}
                                                                    disabled={loading}
                                                                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                                                >
                                                                    {loading ? (
                                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                        </svg>
                                                                    ) : null}
                                                                    Siparişi Tamamla
                                                                </button>
                                                                <button
                                                                    onClick={() => setStep(1)}
                                                                    className="w-full flex justify-center items-center px-6 py-3 border border-gray-300 rounded-full shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
                                                                >
                                                                    Geri Dön
                                                                </button>
                                                            </>
                                                        )}
                                                        <button
                                                            onClick={emptyCart}
                                                            className="w-full flex justify-center items-center px-6 py-3 border border-gray-300 rounded-full shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
                                                        >
                                                            Sepeti Temizle
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const Cart = () => {
    return (
        <CartProvider>
            <CartContent />
        </CartProvider>
    );
};

export default Cart; 