import React, { useState } from "react";
import { useCartStore } from '../../store/cartStore';

const ShopCart = ({ shopItems }) => {
  const addToCart = useCartStore(state => state.addToCart);
    
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {shopItems.map((shopItem, index) => {
        return (
          <div className='bg-white p-5 rounded-lg shadow-[0_1px_3px_rgba(3,0,71,0.09)] relative group' key={index}>
            
            {/* Contenedor de la imagen y los badges */}
            <div className='relative w-full h-[200px] flex justify-center items-center overflow-hidden mb-4'>
              <span className='absolute top-0 left-0 bg-primary px-3 py-1 text-[12px] rounded-full text-white z-10'>
                {shopItem.discount}% Off
              </span>
              
              <img src={shopItem.cover} alt='' className='max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110' />
              
              <div className='absolute top-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 flex flex-col items-center'>
                <label className="bg-secondary px-2.5 py-[1px] text-[12px] text-white rounded-full">{count}</label>
                <i className='fa-regular fa-heart text-[20px] mt-2 cursor-pointer hover:text-primary' onClick={increment}></i>
              </div>
            </div>
            
            <div className='mt-4'>
              <h3 className="font-normal text-[17px] truncate">{shopItem.name}</h3>
              <div className='text-[#ffcd4e] flex gap-1 my-2 text-sm'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='flex justify-between items-center text-primary'>
                <h4 className="text-lg font-bold">${shopItem.price}.00 </h4>
                <button 
                  className="text-primary text-[20px] transition-all duration-300 border border-black/10 w-[35px] h-[35px] rounded-[5px] hover:bg-primary hover:text-white flex items-center justify-center" 
                  onClick={() => addToCart(shopItem)}
                >
                  <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>

          </div>
        )
      })}
    </>
  )
}

export default ShopCart;