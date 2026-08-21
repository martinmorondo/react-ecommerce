import React from 'react';
import FlashCard from './FlashCard';

const FlashDeals = ({ productItems }) => {
    return (
        <>
            <section className='bg-background py-10'>
                <div className='max-w-[90%] mx-auto'>
                    <div className='flex items-center gap-3 mb-8'>
                        <i className='fa fa-bolt text-primary text-[30px]'></i>
                        <h2 className='text-[25px] font-bold'>Flash Deals</h2>
                    </div>
                    <FlashCard productItems={productItems} />
                </div>
            </section>
        </>
    );
}

export default FlashDeals;