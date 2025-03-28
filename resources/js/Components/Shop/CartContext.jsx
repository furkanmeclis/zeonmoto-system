import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pricesVisible, setPricesVisible] = useState(() => {
        // LocalStorage'dan pricesVisible değerini al
        const storedPricesVisible = localStorage.getItem('pricesVisible');
        return storedPricesVisible === 'true';
    });

    const fetchCart = async () => {
        try {
            const response = await axios.get('/api/cart');
            setCart(response.data.cart);
        } catch (error) {
            console.error('Sepet yüklenirken hata oluştu:', error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const addToCart = async (productUniqid, quantity) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/cart/add', {
                product_uniqid: productUniqid,
                quantity: quantity
            });
            fetchCart();
            return response.data;
        } catch (error) {
            console.error('Ürün sepete eklenirken hata oluştu:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const updateQuantity = async (itemId, quantity) => {
        setLoading(true);
        try {
            const response = await axios.put(`/api/cart/item/${itemId}`, {
                quantity: quantity
            });
            fetchCart();
            return response.data;
        } catch (error) {
            console.error('Ürün miktarı güncellenirken hata oluştu:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (itemId) => {
        setLoading(true);
        try {
            const response = await axios.delete(`/api/cart/item/${itemId}`);
            fetchCart();
            return response.data;
        } catch (error) {
            console.error('Ürün sepetten kaldırılırken hata oluştu:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const updateCartName = async (cartName) => {
        setLoading(true);
        try {
            const response = await axios.put('/api/cart/name', {
                cart_name: cartName
            });
            fetchCart();
            return response.data;
        } catch (error) {
            console.error('Sepet ismi güncellenirken hata oluştu:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const getCartItem = (productUniqid) => {
        if (!cart || !cart.items) return null;
        return cart.items.find(item => item.product_uniqid === productUniqid);
    };

    const clearCart = async () => {
        setLoading(true);
        try {
            const response = await axios.delete('/api/cart/clear');
            fetchCart();
            return response.data;
        } catch (error) {
            console.error('Sepet boşaltılırken hata oluştu:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    }; 

    const createOrder = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/api/cart/order');
            fetchCart();
            return response.data;
        } catch (error) {
            console.error('Sipariş oluşturulurken hata oluştu:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const getShareLink = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/cart/share');
            return response.data;
        } catch (error) {
            console.error('Paylaşım linki alınırken hata oluştu:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };
    
    const checkPin = async (pin) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/pin/check', { pin });
            if (response.data.valid) {
                setPricesVisible(true);
                localStorage.setItem('pricesVisible', 'true');
            }
            return response.data;
        } catch (error) {
            console.error('PIN kontrolü sırasında hata oluştu:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };
    
    const resetPricesVisibility = () => {
        setPricesVisible(false);
        localStorage.setItem('pricesVisible', 'false');
    };

    return (
        <CartContext.Provider value={{
            cart,
            loading,
            pricesVisible,
            addToCart,
            updateQuantity,
            removeFromCart,
            getCartItem,
            updateCartName,
            fetchCart,
            clearCart,
            createOrder,
            getShareLink,
            checkPin,
            resetPricesVisibility
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
