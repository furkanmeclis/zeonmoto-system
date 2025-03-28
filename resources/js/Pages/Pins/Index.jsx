import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ auth, pins }) {
    const [editingPin, setEditingPin] = useState(null);
    const { data, setData, post, put, delete: destroy, processing, errors, reset } = useForm({
        username: '',
        pin: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('pins.store'), {
            onSuccess: () => {
                reset();
            }
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        put(route('pins.update', editingPin.id), {
            onSuccess: () => {
                setEditingPin(null);
                reset();
            }
        });
    };

    const handleDelete = (id) => {
        if (confirm('Bu PIN kaydını silmek istediğinize emin misiniz?')) {
            destroy(route('pins.destroy', id));
        }
    };

    const startEditing = (pin) => {
        setEditingPin(pin);
        setData({
            username: pin.username,
            pin: pin.pin
        });
    };

    const cancelEditing = () => {
        setEditingPin(null);
        reset();
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">PIN Yönetimi</h2>}
        >
            <Head title="PIN Yönetimi" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-medium mb-4">
                                {editingPin ? 'PIN Düzenle' : 'Yeni PIN Ekle'}
                            </h3>

                            <form onSubmit={editingPin ? handleUpdate : handleSubmit} className="mb-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                            Kullanıcı Adı
                                        </label>
                                        <input
                                            type="text"
                                            id="username"
                                            value={data.username}
                                            onChange={(e) => setData('username', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            required
                                        />
                                        {errors.username && <div className="text-red-500 mt-1">{errors.username}</div>}
                                    </div>

                                    <div>
                                        <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
                                            PIN (6 haneli)
                                        </label>
                                        <input
                                            type="text"
                                            id="pin"
                                            value={data.pin}
                                            onChange={(e) => setData('pin', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            maxLength="6"
                                            pattern="[0-9]{6}"
                                            required
                                        />
                                        {errors.pin && <div className="text-red-500 mt-1">{errors.pin}</div>}
                                    </div>
                                </div>

                                <div className="mt-4 flex space-x-2">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        disabled={processing}
                                    >
                                        {editingPin ? 'Güncelle' : 'Kaydet'}
                                    </button>

                                    {editingPin && (
                                        <button
                                            type="button"
                                            onClick={cancelEditing}
                                            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            İptal
                                        </button>
                                    )}
                                </div>
                            </form>

                            <h3 className="text-lg font-medium mb-4">PIN Listesi</h3>
                            
                            {pins.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    ID
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Kullanıcı Adı
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    PIN
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    İşlemler
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {pins.map((pin) => (
                                                <tr key={pin.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {pin.id}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {pin.username}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {pin.pin}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <button
                                                            onClick={() => startEditing(pin)}
                                                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                                                        >
                                                            Düzenle
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(pin.id)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            Sil
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <p className="text-gray-500">Henüz kayıtlı PIN bulunmamaktadır.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
