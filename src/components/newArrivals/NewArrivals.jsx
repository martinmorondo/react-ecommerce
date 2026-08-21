import React from 'react';
import Cart from './Cart';

export const NewArrivals = ({ arrivalsItems }) => {
  return (
    <>
        <section className='bg-background py-10'>
            <div className='max-w-[90%] mx-auto'>
                <div className='flex justify-between items-center mt-[50px] mb-5'>
                    <div className='flex items-center gap-3 w-1/2'>
                        <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' className='w-[40px] h-[40px]' alt='new' />
                        <h2 className='text-[25px] font-bold'>New arrivals</h2>
                    </div>
                    <div className='flex items-center justify-end w-1/2 text-gray-500'>
                        <span className='text-primary text-[15px] font-medium cursor-pointer'>View all</span>
                        <i className='fa-solid fa-caret-right ml-2'></i>
                    </div>
                </div>

                <Cart arrivalsItems={arrivalsItems}/>
            </div>
        </section>
    </>
  )
}