import React, { useState } from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"

export const Shop = ({ shopItems }) => {
  const [selectedCategory, setSelectedCategory] = useState(null); 

  // LÓGICA DE NEGOCIO: Filtramos acá
  const filteredItems = selectedCategory
    ? shopItems.filter((item) => item.category === selectedCategory)
    : shopItems;

  return (
    <>
      <section className='bg-background py-10'>
        <div className='max-w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-5'>
          {/* El componente Categorías (Sidebar) */}
          <div className="w-full md:w-[23%]">
             <Catg setSelectedCategory={setSelectedCategory}/>
          </div>

          <div className='w-full md:w-[77%]'>
            <div className='flex justify-between items-center mb-5'>
              <div className='flex items-center'>
                <h2 className="text-[25px] font-bold">Shop</h2>
              </div>
              <div className='flex items-center justify-end text-gray-500'>
                <span className='text-primary text-[15px] font-medium cursor-pointer'>View all</span>
                <i className='fa-solid fa-caret-right ml-2'></i>
              </div>
            </div>
            
            {/* Grilla responsiva de productos */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              <ShopCart shopItems={filteredItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop;