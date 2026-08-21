import React from "react";

const Wrapper = () => {
  const data = [
    {
      cover: <i className='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className='fa-solid fa-shield'></i>,
      title: "Shop With Confidence",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className='fa-solid fa-headset'></i>,
      title: "24/7 Support",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  
  return (
    <>
      <section className='bg-white py-16 border-t border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {data.map((val, index) => {
            return (
              // Tarjeta moderna con hover
              <div className='flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300' key={index}>
                
                {/* Ícono con color primario */}
                <div className='w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center mb-6 text-[30px] text-primary shadow-sm'>
                  {val.cover}
                </div>
                
                <h3 className='font-bold text-[18px] text-gray-800 mb-3'>{val.title}</h3>
                <p className='text-[14px] text-gray-500 leading-relaxed'>{val.decs}</p>
              </div>
            )
          })}
          
        </div>
      </section>
    </>
  )
}

export default Wrapper;