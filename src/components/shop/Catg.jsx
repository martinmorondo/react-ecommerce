import React from "react";

const Catg = ({ setSelectedCategory }) => {
  const data = [
    {
      cateName: "Phones",
      category: "phone",
    },
    {
      cateName: "PlayStation",
      category: "playstation",
    },
    {
      cateName: "Xbox",
      category: "xbox",
    },
    {
      cateName: "Watch",
      category: "watch",
    },
    {
      cateName: "Glasses",
      category: "glasses",
    },
    {
      cateName: "Headphones",
      category: "headphones",
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
 
  return (
    <>
      {/* Contenedor principal con sombra, fondo blanco y altura adaptativa */}
      <div className='bg-white p-[30px] rounded-lg shadow-[0_4px_16px_rgba(43,52,69,0.1)] h-auto md:h-[90vh] w-full'>
        <div className='flex justify-between items-center mb-5'>
          <h1 className="text-[20px] font-bold">Products</h1>
        </div>
        
        {data.map((value, index) => {
          return (
            <div 
              className='flex items-center bg-background my-[15px] p-2.5 rounded-[5px] transition-all duration-500 hover:bg-white hover:shadow-[0_4px_16px_rgba(43,52,69,0.1)] cursor-pointer group' 
              key={index}
              onClick={() => handleCategoryClick(value.category)}
            >
              {/* Botón que ocupa todo el ancho disponible */}
              <button className="w-full text-left text-[17px] font-medium bg-transparent outline-none group-hover:text-primary transition-colors">
                {value.cateName}
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Catg;