import React, { useState } from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { formatCurrency } from '@/utils';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import QRCode from 'react-qr-code';
import { useCart } from '@/Components/Shop/CartContext';
const SharedCart = ({ cart, total }) => {
    const { auth } = usePage().props;
    const {  pricesVisible } = useCart();
    const [showShippingDialog, setShowShippingDialog] = useState(false);
    const [shippingInfo, setShippingInfo] = useState({
        fullName: auth?.user?.name || '',
        phone: '',
        address: '',
        city: '',
        district: '',
        shippingType: 'ALICI_ODER',
        notes: ''
    });

    const handleShippingInfoChange = (key, value) => {
        setShippingInfo(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const shippingTypes = [
        { label: 'Alıcı Öder', value: 'ALICI_ODER' },
        { label: 'Satıcı Öder', value: 'SATICI_ODER' }
    ];

    const handleSaveShippingInfo = () => {
        setShowShippingDialog(false);
    };

    return (
        <>
            <Head title="Paylaşılan Sepet" />
            <div id="print-content" className="hidden print:block">
                {/* Kargo Bilgileri Tablosu */}
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="">
                                <div className="flex flex-col items-center">
                                    <img src="/logo.png" alt="Logo" className="h-16 mx-auto logo-print" />
                                    <span className="text-gray-600 text-center">
                                        {new Date().toLocaleDateString('tr-TR')}
                                    </span>
                                </div>
                            </th>
                            <th colSpan="2" className="text-center bg-gray-100">Müşteri ve Kargo Bilgileri</th>
                            <th >
                                <div className="flex justify-center items-center">
                                    <QRCode
                                        value={window.location.href}
                                        size={80}
                                        style={{ width: "2cm", height: "2cm" }}
                                    />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="font-semibold w-1/4">Ad Soyad:</td>
                            <td className="w-1/4">{shippingInfo.fullName || '...........................'}</td>
                            <td className="font-semibold w-1/4">Telefon:</td>
                            <td className="w-1/4">{shippingInfo.phone || '...........................'}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">İl:</td>
                            <td>{shippingInfo.city || '...........................'}</td>
                            <td className="font-semibold">İlçe:</td>
                            <td>{shippingInfo.district || '...........................'}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Adres:</td>
                            <td colSpan="3">{shippingInfo.address || '...........................'}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Kargo Ödemesi:</td>
                            <td colSpan="3">{shippingInfo.shippingType === 'ALICI_ODER' ? 'Alıcı Öder' : 'Satıcı Öder'}</td>
                        </tr>
                        {shippingInfo.notes && (
                            <tr>
                                <td className="font-semibold">Not:</td>
                                <td colSpan="3">{shippingInfo.notes}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Ürün Tablosu */}
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Ürün</th>
                            <th className="text-center">SKU</th>
                            <th className="text-center">Birim Fiyat</th>
                            <th className="text-center">Adet</th>
                            <th className="text-right">Toplam</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.product.name}</td>
                                <td className="text-center">{item.product.sku || '-'}</td>
                                <td className="text-center">{pricesVisible ? formatCurrency(item.product.price) : '*** ₺'}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-right">{pricesVisible ? formatCurrency(item.product.price * item.quantity) : '*** ₺'}</td>
                            </tr>
                        ))}
                        <tr className="font-bold">
                            <td colSpan="4" className="text-right">Genel Toplam:</td>
                            <td className="text-right">{pricesVisible ? formatCurrency(total) : '*** ₺'}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="text-center text-sm text-gray-500">
                    <p>Bu bir bilgi fişidir, fatura yerine geçmez.</p>
                    <p className="mt-2">www.zeonmoto.com</p>
                </div>
            </div>
            {/* Yazdırma Stili */}
            <style type="text/css" media="print">
                {`
                    @page {
                        size: A4 portrait;
                        margin: 1cm;
                    }
                    @media print {
                        body * {
                            visibility: hidden;
                            font-size: 12px;
                        }
                        #print-content, #print-content * {
                            visibility: visible;
                        }
                        #print-content {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                        }
                        .no-print {
                            display: none !important;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-bottom: 20px;
                            font-size: 11px;
                        }
                        th, td {
                            border: 1px solid #ddd;
                            padding: 6px;
                            text-align: left;
                        }
                        th {
                            background-color: #f8f8f8;
                            font-size: 11px;
                        }
                        h1 {
                            font-size: 16px !important;
                        }
                        p {
                            font-size: 11px;
                        }
                        .logo-print {
                            height: 50px !important;
                        }
                    }
                `}
            </style>

            <div className="min-h-screen bg-gray-50 print:hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Normal Görünüm */}
                    <div className="bg-white rounded-lg shadow-lg p-6 screen-only">
                        <div className="space-y-6">
                            {/* Sepet Başlığı */}
                            <div className="border-b pb-6">
                                <h1 className="text-2xl font-semibold text-gray-900">
                                    {cart.cart_name || 'İsimsiz Sepet'}
                                </h1>
                                <p className="mt-2 text-sm text-gray-500">
                                    Bu sepet sizinle paylaşıldı
                                </p>
                            </div>

                            {/* Ürün Listesi */}
                            <div className="space-y-4">
                                {cart.items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                                    >
                                        <div className="flex-shrink-0 w-20 h-20">
                                            <img
                                                src={item.product.images[0] || '/logo.png'}
                                                alt={item.product.name}
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <Link href={route('new-shop.product.show', item.product.sku)}>
                                                <h3 className="text-sm font-medium text-gray-900 truncate">
                                                    {item.product.name}
                                                </h3>
                                            </Link>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Adet: {item.quantity}
                                            </p>
                                            <p className="mt-1 text-sm font-medium text-gray-900">
                                                {pricesVisible ? formatCurrency(item.product.price) : '*** ₺'}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium text-gray-900">
                                                Toplam: {pricesVisible ? formatCurrency(item.product.price * item.quantity) : '*** ₺'}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Toplam */}
                            <div className="border-t pt-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-base font-medium text-gray-900">Toplam</span>
                                    <span className="text-2xl font-semibold text-yellow-600">
                                        {pricesVisible ? formatCurrency(total) : '*** ₺'}
                                    </span>
                                </div>
                            </div>

                            {/* Butonlar */}
                            <div className="flex flex-col space-y-3 no-print">
                                {auth?.user && (
                                    <>
                                        <button
                                            onClick={() => setShowShippingDialog(true)}
                                            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-600 transition-colors"
                                        >
                                            Kargo Bilgilerini Düzenle
                                        </button>
                                        <button
                                            onClick={() => window.print()}
                                            className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-md font-medium hover:bg-gray-200 transition-colors"
                                        >
                                            Yazdır
                                        </button>
                                    </>
                                )}
                                <Link href={route('new-shop.index')}>
                                    <button
                                        className="w-full bg-yellow-500 text-white py-3 px-4 rounded-md font-medium hover:bg-yellow-600 transition-colors"
                                    >
                                        Mağazaya Git
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* Yazdırma Görünümü */}

                </div>
            </div>

            {/* Kargo Bilgileri Dialog'u */}
            <Dialog
                visible={showShippingDialog}
                onHide={() => setShowShippingDialog(false)}
                header="Kargo Bilgileri"
                className="w-[90vw] md:w-[600px]"
                footer={
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={() => setShowShippingDialog(false)}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            İptal
                        </button>
                        <button
                            onClick={handleSaveShippingInfo}
                            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
                        >
                            Kaydet
                        </button>
                    </div>
                }
            >
                <div className="space-y-4 p-4">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Ad Soyad</label>
                        <InputText
                            value={shippingInfo.fullName}
                            onChange={(e) => handleShippingInfoChange('fullName', e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Telefon</label>
                        <InputText
                            value={shippingInfo.phone}
                            onChange={(e) => handleShippingInfoChange('phone', e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Adres</label>
                        <InputText
                            value={shippingInfo.address}
                            onChange={(e) => handleShippingInfoChange('address', e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">İl</label>
                        <InputText
                            value={shippingInfo.city}
                            onChange={(e) => handleShippingInfoChange('city', e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">İlçe</label>
                        <InputText
                            value={shippingInfo.district}
                            onChange={(e) => handleShippingInfoChange('district', e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Kargo Ödemesi</label>
                        <Dropdown
                            value={shippingInfo.shippingType}
                            options={shippingTypes}
                            onChange={(e) => handleShippingInfoChange('shippingType', e.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Not</label>
                        <InputTextarea
                            value={shippingInfo.notes}
                            onChange={(e) => handleShippingInfoChange('notes', e.target.value)}
                            rows={3}
                            className="w-full"
                            placeholder="Kargo ile ilgili özel notlarınızı buraya yazabilirsiniz..."
                        />
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default SharedCart;
