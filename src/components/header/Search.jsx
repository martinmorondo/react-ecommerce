import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/phone-logo.png';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

const Search = () => {
    const cartItem = useCartStore(state => state.cartItem);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`bg-white transition-all duration-300 border-b border-gray-100 ${isScrolled ? 'fixed top-0 w-full z-[1000] shadow-md py-3' : 'py-6'}`}>
            <div className='max-w-7xl mx-auto px-4 flex justify-between items-center w-full gap-5 md:gap-10'>
                
                {/* LOGO */}
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src={logo} alt='logo' className='w-[40px] md:w-[45px] object-contain' />
                    <span className="hidden md:block font-black text-3xl text-[#0f3460] tracking-tight">Store.</span>
                </div>

                {/* SEARCH BOX */}
                <div className='flex-1 flex items-center bg-[#f6f9fc] border border-gray-200 rounded-full focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all overflow-hidden h-[50px]'>
                    <i className='fa-solid fa-magnifying-glass text-gray-400 pl-5 pr-3 text-lg'></i>
                    <input type='text' placeholder='Search for products...' className='w-full h-full outline-none bg-transparent text-sm md:text-base text-gray-800 placeholder-gray-400' />
                    <div className='hidden md:flex items-center justify-center border-l border-gray-200 px-5 bg-gray-100 hover:bg-gray-200 cursor-pointer h-full transition-colors'>
                        <span className='text-sm text-gray-700 font-medium'>All Categories</span>
                        <i className="fa-solid fa-caret-down ml-2 text-gray-500 text-xs"></i>
                    </div>
                </div>

                {/* ICONS (Solucionado el color) */}
                <div className='flex items-center gap-4'>
                    <div className='w-[50px] h-[50px] bg-[#f6f9fc] rounded-full flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white text-gray-800 transition-colors shadow-sm hidden md:flex'>
                        <i className='fa-solid fa-user text-xl'></i>
                    </div>
                    
                    <Link to='/cart' className='relative flex'>
                        <div className='w-[50px] h-[50px] bg-[#f6f9fc] rounded-full flex justify-center items-center hover:bg-primary hover:text-white text-gray-800 transition-colors shadow-sm'>
                            <i className='fa-solid fa-cart-shopping text-xl'></i>
                        </div>
                        <span className='absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center bg-primary text-[12px] font-bold text-white shadow-md border-2 border-white'>
                            {cartItem.length}
                        </span>
                    </Link>
                </div>
                
            </div>
        </section>
    );
}

export default Search;