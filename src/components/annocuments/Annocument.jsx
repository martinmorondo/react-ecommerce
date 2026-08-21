import React from "react";

const Annocument = () => {
  return (
    <>
      <section className='bg-background py-16'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6'>
          
          {/* Banner Izquierdo */}
          <div className='w-full md:w-[30%] h-[300px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'>
            <img 
              src='/img/products/banner-1.jpg' 
              alt='banner promocional'
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' 
            />
          </div>
          
          {/* Banner Derecho */}
          <div className='w-full md:w-[70%] h-[300px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'>
            <img 
              src='/img/products/banner-2.jpg' 
              alt='banner promocional 2'
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' 
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument;