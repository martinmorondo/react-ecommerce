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
    // Traemos los estados y la función del store
    const { products, isLoading, error, fetchProducts } = useProductStore();

    // useEffect para disparar la carga de datos al montar el componente
    useEffect(() => {
        // Solo hacemos el fetch si no tenemos productos cargados aún
        if (products.productItems.length === 0) {
            fetchProducts();
        }
    }, [fetchProducts, products.productItems.length]);

    // MANEJO DE ESTADOS DE LA UI
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <div className="w-16 h-16 border-4 border-[#e94560] border-t-transparent rounded-full animate-spin"></div>
                <h2 className="mt-4 text-xl font-medium text-gray-600">Cargando catálogo...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 min-h-[50vh] flex items-center justify-center">
                <h2>{error}</h2>
            </div>
        );
    }
    
    // Si no está cargando y no hay error, renderizamos la app normal
    return (
        <>
            <Home />
            <FlashDeals productItems={products.productItems} />
            <TopCate topItems={products.topItems} />
            <NewArrivals arrivalsItems={products.arrivalsItems} />
            <Shop shopItems={products.shopItems} />
            <Annocument />
            <Wrapper />
        </>
    );
}

export default Pages;