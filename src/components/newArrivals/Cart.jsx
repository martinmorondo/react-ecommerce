import React from "react";
import { useCartStore } from '../../store/cartStore';

const Cart = ({ arrivalsItems }) => {
  const addToCart = useCartStore(state => state.addToCart);

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 my-5'>
        {arrivalsItems.map((val, index) => {
          return (
            <div className='bg-white p-4 rounded-lg shadow-[0_1px_3px_rgba(3,0,71,0.09)] transition-transform duration-300 hover:scale-105 flex flex-col items-center' key={index}>
              <div className='w-full h-[150px] flex justify-center items-center mb-4'>
                <img src={val.cover} alt='' className='max-w-full max-h-full object-contain' />
              </div>
              
              <h4 className='font-normal text-[15px] text-center w-full truncate'>{val.name}</h4>
              
              <div className='flex justify-between items-center text-primary mt-3 w-full'>
                <h4 className='font-bold text-lg'>${val.price}.00</h4>
                <button 
                  className='text-primary text-[20px] transition-all duration-300 border border-black/10 w-[35px] h-[35px] rounded-[5px] hover:bg-primary hover:text-white flex items-center justify-center' 
                  onClick={() => addToCart(val)}
                >
                  <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart;