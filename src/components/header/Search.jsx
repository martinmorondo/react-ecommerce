import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/phone-logo.png';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

const Search = () => {
    const cartItem = useCartStore(state => state.cartItem);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section className={`py-6 bg-white transition-all duration-500 border-b border-gray-100 ${isScrolled ? 'fixed top-0 w-full z-[1000] shadow-md py-3' : ''}`}>
                <div className='max-w-7xl mx-auto px-4 flex justify-between items-center w-full gap-5'>
                    
                    {/* LOGO */}
                    <div className='w-[20%] md:w-[15%] flex items-center'>
                        <img src={logo} alt='logo' className='w-[40px] md:w-[50px] object-contain' />
                        {/* Texto opcional al lado del logo para darle más presencia en desktop */}
                        <span className="hidden lg:block font-extrabold text-2xl text-gray-800 tracking-tight ml-2">Store</span>
                    </div>

                    {/* SEARCH BOX  */}
                    <div className='w-[60%] md:w-[55%] flex items-center bg-gray-50 border border-gray-200 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all shadow-sm'>
                        <i className='fa fa-search text-gray-400 pl-5 pr-3 text-lg'></i>
                        <input type='text' placeholder='Search for products...' className='w-full p-3 outline-none bg-transparent text-sm md:text-base text-gray-700 placeholder-gray-400' />
                        <div className='hidden md:flex items-center border-l border-gray-200 px-4 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors h-full'>
                            <span className='text-sm text-gray-600 font-medium whitespace-nowrap'>All Categories</span>
                            <i className="fa-solid fa-caret-down ml-2 text-gray-500 text-xs"></i>
                        </div>
                    </div>

                    {/* ICONS */}
                    <div className='w-[20%] md:w-[30%] flex justify-end items-center gap-4 md:gap-6'>
                        <div className='w-[45px] h-[45px] bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white text-gray-700 transition-colors shadow-sm hidden md:flex'>
                            <i className='fa fa-user text-lg'></i>
                        </div>
                        
                        <div className='relative'>
                            <Link to='/cart' className='flex'>
                                <div className='w-[45px] h-[45px] bg-gray-100 rounded-full flex justify-center items-center hover:bg-primary hover:text-white text-gray-700 transition-colors shadow-sm'>
                                    <i className='fa fa-shopping-bag text-lg'></i>
                                </div>
                                <span className='absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center bg-primary text-[12px] font-bold text-white shadow-md border-2 border-white'>
                                    {cartItem.length === 0 ? "0" : cartItem.length}
                                </span>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
}

export default Search;