import React from 'react';

const Footer = () => {
    return (
      <>
        <footer className='bg-secondary py-12 text-white mt-10'>
          <div className='max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            
            {/* Columna 1: Logo y Apps */}
            <div className='bg-black/10 p-6 rounded-lg'>
              <h1 className='text-primary text-[25px] font-extrabold italic mb-6'>Ecommerce</h1>
              <div className='flex gap-4'>
                <div className='bg-[#0c2a4d] px-4 py-3 rounded-[5px] flex flex-col items-center justify-center cursor-pointer transition-colors hover:bg-primary'>
                  <i className='fa-brands fa-google-play text-xl mb-1'></i>
                  <span className='text-xs mt-1'>Google Play</span>
                </div>
                <div className='bg-[#0c2a4d] px-4 py-3 rounded-[5px] flex flex-col items-center justify-center cursor-pointer transition-colors hover:bg-primary'>
                  <i className='fa-brands fa-app-store-ios text-xl mb-1'></i>
                  <span className='text-xs mt-1'>App Store</span>
                </div>
              </div>
            </div>

            {/* Columna 2: About Us */}
            <div>
              <h2 className='text-lg font-bold mb-5'>About Us</h2>
              <ul className='text-[14px] opacity-60 space-y-3'>
                <li className='cursor-pointer hover:text-primary transition-colors'>Careers</li>
                <li className='cursor-pointer hover:text-primary transition-colors'>Our Stores</li>
                <li className='cursor-pointer hover:text-primary transition-colors'>Our Cares</li>
                <li className='cursor-pointer hover:text-primary transition-colors'>Terms & Conditions</li>
                <li className='cursor-pointer hover:text-primary transition-colors'>Privacy Policy</li>
              </ul>
            </div>

            {/* Columna 3: Customer Care */}
            <div>
              <h2 className='text-lg font-bold mb-5'>Customer Care</h2>
              <ul className='text-[14px] opacity-60 space-y-3'>
                <li className='cursor-pointer hover:text-primary transition-colors'>Help Center</li>
                <li className='cursor-pointer hover:text-primary transition-colors'>How to Buy</li>
                <li className='cursor-pointer hover:text-primary transition-colors'>Track Your Order</li>
                <li className='cursor-pointer hover:text-primary transition-colors'>Corporate & Bulk Purchasing</li>
                <li className='cursor-pointer hover:text-primary transition-colors'>Returns & Refunds</li>
              </ul>
            </div>

            {/* Columna 4: Contact Us */}
            <div>
              <h2 className='text-lg font-bold mb-5'>Contact Us</h2>
              <ul className='text-[14px] opacity-60 space-y-3'>
                <li>70 Washington Square South, New York, NY 10012, United States</li>
                <li>Email: uilib.help@gmail.com</li>
                <li>Phone: +1 1123 456 780</li>
              </ul>
            </div>

          </div>
        </footer>
      </>
    )
  }
  
  export default Footer;