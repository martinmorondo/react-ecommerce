import React from 'react';
import { TopCart } from './TopCart';

export const TopCate = ({ topItems }) => {
  return (
    <>
        <section className='bg-background py-10'>
            <div className='max-w-[90%] mx-auto'>
                <div className='flex justify-between items-center mt-[50px] mb-5'>
                    <div className='flex items-center gap-3 w-1/2'>
                        <i className='fa-solid fa-border-all text-primary text-[30px]'></i>
                        <h2 className='text-[25px] font-bold'>Top Categories</h2>
                    </div>
                    <div className='flex items-center justify-end w-1/2 text-gray-500'>
                        <span className='text-primary text-[15px] font-medium cursor-pointer'>View all</span>
                        <i className='fa-solid fa-caret-right ml-2'></i>
                    </div>
                </div>
                <TopCart topItems={topItems} />
            </div>
        </section>
    </>
  )
}