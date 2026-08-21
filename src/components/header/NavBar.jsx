import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [MobileMenu, setMobileMenu] = useState(false);

    return (
        <>
            <header className='h-[8vh] bg-[#31052b] text-white shadow-md relative z-50'>
                <div className='max-w-[90%] mx-auto flex justify-between items-center h-full'>
                    {/* Bloque de categorías */}
                    <div className='bg-background px-[30px] h-[6vh] rounded-[5px] flex items-center mt-[5px] text-black'>
                        <span className='fa-solid fa-border-all text-[25px]'></span>
                    </div>

                    <div className='nav-link'>
                        <ul className={MobileMenu 
                            ? 'absolute left-0 top-0 w-full h-screen bg-white z-[888] shadow-2xl flex flex-col items-center pt-[30px] transition-all duration-500' 
                            : 'hidden md:flex items-center capitalize'} 
                            onClick={() => setMobileMenu(false)}
                        >
                            <li className={`md:ml-[30px] ${MobileMenu ? 'w-full text-center leading-[70px]' : ''}`}>
                               <Link to='/' className={`transition-all duration-500 text-[15px] font-normal ${MobileMenu ? 'text-black uppercase hover:text-primary' : 'text-white hover:text-primary'}`}>home</Link> 
                            </li>
                            <li className={`md:ml-[30px] ${MobileMenu ? 'w-full text-center leading-[70px]' : ''}`}>
                               <Link to='/pages' className={`transition-all duration-500 text-[15px] font-normal ${MobileMenu ? 'text-black uppercase hover:text-primary' : 'text-white hover:text-primary'}`}>pages</Link> 
                            </li>
                            <li className={`md:ml-[30px] ${MobileMenu ? 'w-full text-center leading-[70px]' : ''}`}>
                               <Link to='/cart' className={`transition-all duration-500 text-[15px] font-normal ${MobileMenu ? 'text-black uppercase hover:text-primary' : 'text-white hover:text-primary'}`}>track my order</Link> 
                            </li>
                            <li className={`md:ml-[30px] ${MobileMenu ? 'w-full text-center leading-[70px]' : ''}`}>
                               <Link to='/contact' className={`transition-all duration-500 text-[15px] font-normal ${MobileMenu ? 'text-black uppercase hover:text-primary' : 'text-white hover:text-primary'}`}>contact</Link> 
                            </li>
                        </ul>

                        <button className='md:hidden absolute top-[20px] right-[20px] text-primary text-[25px] z-[9999]' onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? 
                                <i className='fas fa-times w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-sm'></i> :
                                <i className="fa-solid fa-bars"></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;