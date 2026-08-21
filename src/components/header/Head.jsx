import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <header className='h-[6vh] md:h-[8vh] bg-[#31052b] text-white shadow-md relative z-50'>
                <div className='max-w-[90%] mx-auto flex justify-end items-center h-full'>
                    <div className='nav-link'>
                        
                        <ul className={MobileMenu 
                            ? 'absolute left-0 top-0 w-full h-screen bg-white z-[888] shadow-2xl flex flex-col items-center pt-[30px] transition-all duration-500 gap-5' 
                            : 'hidden md:flex items-center gap-8 capitalize'} 
                            onClick={() => setMobileMenu(false)}
                        >
                            <li className={MobileMenu ? 'w-full text-center leading-[70px]' : ''}>
                               <Link to='/' className={`transition-all duration-500 text-[15px] font-normal ${MobileMenu ? 'text-black uppercase hover:text-primary' : 'text-white hover:text-primary'}`}>home</Link> 
                            </li>                         
                            <li className={MobileMenu ? 'w-full text-center leading-[70px]' : ''}>
                               <Link to='/cart' className={`transition-all duration-500 text-[15px] font-normal ${MobileMenu ? 'text-black uppercase hover:text-primary' : 'text-white hover:text-primary'}`}>track my order</Link> 
                            </li>
                            <li className={MobileMenu ? 'w-full text-center leading-[70px]' : ''}>
                               <Link to='/contact' className={`transition-all duration-500 text-[15px] font-normal ${MobileMenu ? 'text-black uppercase hover:text-primary' : 'text-white hover:text-primary'}`}>contact</Link> 
                            </li>
                        </ul>

                        <button className='md:hidden absolute top-[15px] right-[20px] text-primary text-[25px] z-[9999]' onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? 
                                <i className='fas fa-times w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-sm'></i> :
                                <i className="fa-solid fa-bars"></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Head;