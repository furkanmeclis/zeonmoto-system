import { useState, useRef } from 'react';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Toast } from 'primereact/toast';

export default function Index({ rules, auth }) {
    const { data, setData, post, processing, errors } = useForm({
        rules: rules || []
    });
    const toast = useRef(null);
    const addRule = () => {
        setData('rules', [...data.rules, {
            min: 0,
            max: null,
            multiplier: 1
        }]);
    };

    const removeRule = (index) => {
        const newRules = [...data.rules];
        newRules.splice(index, 1);
        setData('rules', newRules);
    };

    const updateRule = (index, field, value) => {
        const newRules = [...data.rules];
        newRules[index][field] = value;
        setData('rules', newRules);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('price-rules.update'), {
            onSuccess: () => {
                toast.current.show({
                    severity: 'success',
                    summary: 'Başarılı',
                    detail: 'Fiyat kuralları güncellendi.'
                });
            }
        });
    };

    return (
        <Authenticated user={auth.user}
            header="Fiyat Kuralları">
            <Head title="Fiyat Kuralları" />
            <Toast ref={toast} />
            <div className="py-6">
                <div className="max-w-[90rem] mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                {data.rules.map((rule, index) => (
                                    <div key={index} className="flex gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Min Fiyat
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={rule.min}
                                                onChange={(e) => updateRule(index, 'min', parseFloat(e.target.value))}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Max Fiyat
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={rule.max || ''}
                                                onChange={(e) => updateRule(index, 'max', e.target.value ? parseFloat(e.target.value) : null)}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Çarpan
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={rule.multiplier}
                                                onChange={(e) => updateRule(index, 'multiplier', parseFloat(e.target.value))}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeRule(index)}
                                            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                                        >
                                            Sil
                                        </button>
                                    </div>
                                ))}

                                <div className="mt-4 space-x-4">
                                    <button
                                        type="button"
                                        onClick={addRule}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Yeni Kural Ekle
                                    </button>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                                    >
                                        Kaydet
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
} 