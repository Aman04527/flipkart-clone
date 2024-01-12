import React from 'react';
import Canon from "../images/canon.webp";
import Printers from "../images/printers.webp";
import Mobile from "../images/mobiles.webp";
import Toys from "../images/toys.webp";

const RowContainer = () => {
  return (
    <div className='w-full overflow-auto flex items-center gap-3 my-12'>
      <div className="flex items-center justify-evenly cursor-pointer space-x-6 px-4">
        {[
          { image: Canon, title: 'Asus Monitors', description: 'Shop Now' },
          { image: Printers, title: 'Asus Monitors', description: 'Shop Now' },
          { image: Mobile, title: 'Samsung', description: 'Shop Now' },
          { image: Toys, title: 'Asus Monitors', description: 'Shop Now' },
          { image: Toys, title: 'Asus Monitors', description: 'Shop Now' },
          { image: Toys, title: 'Asus Monitors', description: 'Shop Now' },
          
        ].map((item, index) => (
          <div key={index} className="w-[250px] h-[340px] bg-white rounded-lg p-2 px-4 border-solid border-2 border-gray-400">
            <div className='w-full h-[320px] flex flex-col items-center justify-between'>
              <img src={item.image} alt={item.title} className='w-full h-full object-contain py-4' />
              <p className='md:text-lg'>{item.title}</p>
              <p className='text-textColor font-semibold text-base md:text-lg'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowContainer;
