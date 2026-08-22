import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <div className='bg-[#0f3460] text-gray-300 text-xs py-2.5 hidden lg:block'>
            <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
                
                {/* Info de contacto */}
                <div className='flex items-center gap-6'>
                    <a href="tel:+1234567890" className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                        <i className='fa-solid fa-phone'></i> +1 234 567 890
                    </a>
                    <a href="mailto:support@store.com" className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                        <i className='fa-solid fa-envelope'></i> support@store.com
                    </a>
                </div>

                {/* Utilidades y Ayuda */}
                <div className='flex items-center gap-6 font-medium'>
                    <Link to='/faq' className='hover:text-white transition-colors'>Preguntas Frecuentes</Link>
                    <Link to='/help' className='hover:text-white transition-colors'>¿Necesitás Ayuda?</Link>
                    
                    {/* Selectores de Idioma/Moneda visuales */}
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors border-l border-gray-600 pl-6">
                        <span>ES</span>
                        <i className="fa-solid fa-chevron-down text-[10px]"></i>
                    </div>
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
                        <span>ARS</span>
                        <i className="fa-solid fa-chevron-down text-[10px]"></i>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Head;