import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { router } from '@inertiajs/react';
const FilterSection = ({ categories = [], priceRange = { min: 0, max: 9999 }, filters = {} }) => {
    const [currentFilters, setCurrentFilters] = useState({
        category: filters.category || '',
        min_price: filters.min_price || priceRange.min,
        max_price: filters.max_price || priceRange.max,
        search: filters.search || '',
        sort_by: filters.sort_by || 'order',
        sort_order: filters.sort_order || 'desc',
        in_stock: filters.in_stock || false
    });

    const [priceValues, setPriceValues] = useState([
        currentFilters.min_price,
        currentFilters.max_price
    ]);

    const sortOptions = [
        { label: 'Tümü', value: 'order-desc' },
        { label: 'En Yeniler', value: 'created_at-desc' },
        { label: 'En Düşük Fiyat', value: 'price-asc' },
        { label: 'En Yüksek Fiyat', value: 'price-desc' },
        { label: 'A-Z', value: 'name-asc' },
        { label: 'Z-A', value: 'name-desc' }
    ];

    const handleFilterChange = (key, value) => {
        const newFilters = { ...currentFilters, [key]: value };
        setCurrentFilters(newFilters);
        applyFilters(newFilters);
    };

    const handleSortChange = (event) => {
        const value = event.target.value;
        const [sort_by, sort_order] = value.split('-');
        const newFilters = { 
            ...currentFilters, 
            sort_by, 
            sort_order 
        };
        setCurrentFilters(newFilters);
        applyFilters(newFilters);
    };

    const handlePriceChange = (event) => {
        const value = parseInt(event.target.value);
        const isMin = event.target.name === 'min_price';
        
        let newMin = isMin ? value : priceValues[0];
        let newMax = isMin ? priceValues[1] : value;

        // Minimum değer maksimum değerden büyük olamaz
        if (newMin > newMax) {
            if (isMin) {
                newMin = newMax;
            } else {
                newMax = newMin;
            }
        }

        setPriceValues([newMin, newMax]);
    };

    const handlePriceChangeEnd = () => {
        const newFilters = {
            ...currentFilters,
            min_price: priceValues[0],
            max_price: priceValues[1]
        };
        setCurrentFilters(newFilters);
        applyFilters(newFilters);
    };

    const applyFilters = (filters) => {
        router.get(route('new-shop.index'), filters, {
            preserveState: true,
            preserveScroll: true,
            replace: true
        });
    };

    const clearFilters = () => {
        const defaultFilters = {
            category: '',
            min_price: priceRange.min,
            max_price: priceRange.max,
            search: '',
            sort_by: 'order',
            sort_order: 'desc',
            in_stock: false
        };
        setCurrentFilters(defaultFilters);
        setPriceValues([priceRange.min, priceRange.max]);
        applyFilters(defaultFilters);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 space-y-6">
            {/* Arama */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ürün Ara
                </label>
                <input
                    type="text"
                    value={currentFilters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    placeholder="Ürün adı veya SKU..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
            </div>

            {/* Kategoriler */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori
                </label>
                <div className="flex flex-wrap gap-2">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleFilterChange('category', '')}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                            currentFilters.category === ''
                                ? 'bg-yellow-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        Tümü
                    </motion.button>
                    {categories.map((category) => (
                        <motion.button
                            key={category.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleFilterChange('category', category.name)}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                currentFilters.category === category.name
                                    ? 'bg-yellow-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            } ${category.products_count === 0 ? 'hidden' : ''}`}
                        >
                            {category.name} ({category.products_count})
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Fiyat Aralığı */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fiyat Aralığı
                </label>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            type="number"
                            name="min_price"
                            value={priceValues[0]}
                            onChange={handlePriceChange}
                            onBlur={handlePriceChangeEnd}
                            min={priceRange.min}
                            max={priceRange.max}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="max_price"
                            value={priceValues[1]}
                            onChange={handlePriceChange}
                            onBlur={handlePriceChangeEnd}
                            min={priceRange.min}
                            max={priceRange.max}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>
                </div>
            </div>

            {/* Sıralama */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sıralama
                </label>
                <select
                    value={`${currentFilters.sort_by}-${currentFilters.sort_order}`}
                    onChange={handleSortChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                >
                    {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Stok Durumu */}

            {/* Filtreleri Temizle */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={clearFilters}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
                Filtreleri Temizle
            </motion.button>
        </div>
    );
};

export default FilterSection;
