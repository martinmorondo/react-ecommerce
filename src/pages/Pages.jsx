import React, { useEffect } from 'react';
import Home from '../components/main/Home';
import FlashDeals from '../components/flashDeals/FlashDeals';
import { TopCate } from '../components/top/TopCate';
import { NewArrivals } from '../components/newArrivals/NewArrivals';
import { Shop } from '../components/shop/Shop';
import Annocument from '../components/annocuments/Annocument';
import Wrapper from '../components/wrapper/Wrapper';
import { useProductStore } from '../store/productStore';

const Pages = () => {
    const { products, isLoading, error, fetchProducts } = useProductStore();

    useEffect(() => {
        // Solo llamamos a la API si el store está vacío
        if (products.flashDeals.length === 0) {
            fetchProducts();
        }
    }, [fetchProducts, products.flashDeals.length]);

    // ESTADO 1: CARGANDO (Pantalla profesional de carga)
    if (isLoading) {
        return (
            <div className="w-full h-[60vh] flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
                <h2 className="mt-4 text-lg font-medium text-gray-600 animate-pulse">Cargando catálogo...</h2>
            </div>
        );
    }

    // ESTADO 2: ERROR
    if (error) {
        return (
            <div className="w-full h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <i className="fa-solid fa-triangle-exclamation text-5xl text-red-500 mb-4"></i>
                <h2 className="text-xl font-bold text-gray-800">¡Ups! Algo salió mal.</h2>
                <p className="text-gray-500 mt-2">{error}</p>
                <button onClick={fetchProducts} className="mt-6 bg-primary text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
                    Reintentar
                </button>
            </div>
        );
    }
    
    // ESTADO 3: ÉXITO
    return (
        <div className="animate-fade-in">
            <Home />
            <FlashDeals productItems={products.flashDeals} />
            <TopCate topItems={products.topCategories} />
            <NewArrivals arrivalsItems={products.newArrivals} />
            <Shop shopItems={products.shopItems} />
            <Annocument />
            <Wrapper />
        </div>
    );
}

export default Pages;