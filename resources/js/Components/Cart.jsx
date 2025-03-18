import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useCart } from 'react-use-cart';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Cart = ({ isOpen, setIsOpen }) => {
    const { items, removeItem, updateItemQuantity, cartTotal, emptyCart } = useCart();
    const fallbackImage = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
    const [step, setStep] = useState('cart'); // cart, form
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        note: ''
    });

    const formatPrice = (price) => {
        return Number(price).toFixed(2);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendWhatsAppOrder = () => {
        let message = "Merhaba, aşağıdaki ürünleri sipariş etmek istiyorum:\n\n";
        message += `*Sipariş Bilgileri*\n`;
        message += `Ad Soyad: ${formData.name}\n`;
        message += `Telefon: ${formData.phone}\n`;
        message += `E-posta: ${formData.email}\n`;
        message += `Adres: ${formData.address}\n\n`;
        message += `*Ürünler*\n`;
        
        items.forEach(item => {
            message += `• *${item.sku}* - ${item.quantity} Adet\n${item.name}\n*Fiyat:* ${formatPrice(item.price)} TL\n*Toplam:* ${formatPrice(item.price * item.quantity)} TL\n\n`;
        });
        
        message += `\n*Genel Toplam:* ${formatPrice(cartTotal)} TL`;
        
        if (formData.note) {
            message += `\n\n*Not:* ${formData.note}`;
        }

        window.open(`https://wa.me/905123456789?text=${encodeURIComponent(message)}`, '_blank');
        setTimeout(() => {
            emptyCart();
            setIsOpen(false);
            setStep('cart');
            setFormData({
                name: '',
                phone: '',
                email: '',
                address: '',
                note: ''
            });
        }, 1000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        sendWhatsAppOrder();
    };

    const CartStep = () => (
        <div className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-start justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Sepetim</h2>
                    <button
                        className="text-gray-400 hover:text-gray-500"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <p className="text-xl font-medium text-gray-900">Sepetiniz boş</p>
                        <p className="mt-2 text-gray-500">Alışverişe başlamak için ürün ekleyin</p>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors"
                        >
                            Alışverişe Başla
                        </button>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-200">
                        {items.map((item) => (
                            <div key={item.id} className="p-4">
                                <div className="flex gap-4">
                                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                                        <LazyLoadImage
                                            src={item.image || fallbackImage}
                                            alt={item.name}
                                            effect="blur"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="font-medium text-gray-900">{item.name}</h3>
                                                <p className="ml-4 text-gray-900">{formatPrice(item.price)} TL</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">{item.sku}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                    className="p-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                >
                                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                <span className="text-gray-900 font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                                    </div>
                                </div>
                                <div className="mt-3 text-sm text-gray-500">
                                    Toplam: {formatPrice(item.quantity * item.price)} TL
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {items.length > 0 && (
                <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                        <p>Toplam</p>
                        <p>{formatPrice(cartTotal)} TL</p>
                    </div>
                    <div className="space-y-3">
                        <button
                            onClick={() => setStep('form')}
                            className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                        >
                            Siparişi Tamamla
                        </button>
                        <button
                            onClick={emptyCart}
                            className="w-full flex justify-center items-center px-6 py-3 border border-gray-300 rounded-full shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Sepeti Temizle
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

    const FormStep = () => (
        <div className="h-full flex flex-col">
            <div className="flex items-start justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setStep('cart')}
                        className="p-2 rounded-full hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h2 className="text-2xl font-bold text-gray-900">Sipariş Bilgileri</h2>
                </div>
                <button
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() => setIsOpen(false)}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Ad Soyad
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Telefon Numarası
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            E-posta
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Adres
                        </label>
                        <textarea
                            name="address"
                            id="address"
                            required
                            rows={3}
                            value={formData.address}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                            Sipariş Notu
                        </label>
                        <textarea
                            name="note"
                            id="note"
                            rows={2}
                            value={formData.note}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                            placeholder="Varsa eklemek istediğiniz notları yazabilirsiniz..."
                        />
                    </div>
                </form>
            </div>

            <div className="border-t border-gray-200 p-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                    <p>Toplam Tutar</p>
                    <p>{cartTotal.toFixed(2)} TL</p>
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                >
                    Siparişi Onayla
                </button>
            </div>
        </div>
    );

    return (
        <Transition show={isOpen} as={React.Fragment}>
            <div className="fixed inset-0 z-50 overflow-hidden">
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                </Transition.Child>

                <div className="fixed inset-y-0 right-0 max-w-full flex">
                    <Transition.Child
                        enter="transform transition ease-in-out duration-300"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-300"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div className="w-screen max-w-md">
                            <div className="h-full flex flex-col bg-white shadow-xl">
                                {step === 'cart' ? <CartStep /> : <FormStep />}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition>
    );
};

export default Cart; 