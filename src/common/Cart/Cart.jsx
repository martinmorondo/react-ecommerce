import React from "react"
import { useCartStore } from '../../store/cartStore';

const Cart = () => {
  const cartItem = useCartStore(state => state.cartItem);
  const addToCart = useCartStore(state => state.addToCart);
  const decreaseQty = useCartStore(state => state.decreaseQty);
  const removeFromCart = useCartStore(state => state.removeFromCart);

  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      {/* cart-items */}
      <section className='bg-background h-auto py-[50px]'>
        <div className='max-w-[90%] mx-auto flex flex-col lg:flex-row gap-8'>

          {/* cart-details (70% en desktop) */}
          <div className='w-full lg:w-[70%]'>
            {cartItem.length === 0 && (
              <h1 className='text-primary text-[18px] mt-[30px] h-[130px] bg-white p-5 rounded-lg shadow-[0_1px_3px_rgba(3,0,71,0.09)] flex items-center justify-center'>
                No Items are added in Cart
              </h1>
            )}

            {cartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='bg-white mt-[30px] p-5 rounded-lg shadow-[0_1px_3px_rgba(3,0,71,0.09)] flex flex-col md:flex-row justify-between items-center relative' key={item.id}>
                  
                  {/* Imagen y Detalles */}
                  <div className='flex flex-col md:flex-row items-center w-full md:w-auto'>
                    <div className='w-[150px] h-[150px]'>
                      <img src={item.cover} alt='' className='w-full h-full object-contain' />
                    </div>
                    <div className='md:ml-5 text-center md:text-left mt-5 md:mt-0'>
                      <h3 className='text-[20px] font-medium'>{item.name}</h3>
                      <h4 className='text-[15px] font-normal mt-[20px] md:mt-[50px] text-gray-500'>
                        ${item.price}.00 * {item.qty}
                        <span className='text-primary ml-5 font-medium'>${productQty}.00</span>
                      </h4>
                    </div>
                  </div>

                  {/* Botones de Control */}
                  <div className='flex flex-col items-center md:items-end mt-5 md:mt-0'>
                    <div className='mb-4 md:mb-0'>
                      <button className='bg-transparent text-[25px] text-gray-400 hover:text-primary transition-colors cursor-pointer' onClick={() => removeFromCart(item)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                
                    <div className='flex mt-2 md:mt-[50px]'>
                      <button className='bg-transparent border border-black/10 text-primary w-10 h-10 m-2.5 rounded-[5px] text-[20px] cursor-pointer hover:bg-primary hover:text-white transition-colors flex items-center justify-center' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='bg-background text-black w-10 h-10 m-2.5 rounded-[5px] text-[20px] cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          {/* cart-total (30% en desktop) */}
          <div className='w-full lg:w-[30%] mt-[30px]'>
            <div className='bg-white p-5 rounded-lg shadow-[0_1px_3px_rgba(3,0,71,0.09)] h-[130px] flex flex-col justify-center'>
              <h2 className='text-[18px] mb-5 border-b border-black/10 pb-2.5 text-primary font-bold'>Cart Summary</h2>
              <div className='flex justify-between items-center'>
                <h4 className='text-[15px] font-normal'>Total Price :</h4>
                <h3 className='text-[20px] font-medium text-primary'>${totalPrice}.00</h3>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Cart;