import React, { useEffect, useRef } from 'react';
import data from "../utils/data";
import { motion } from "framer-motion";

const RowContainer = ({flag , scrollValue1}) => {

  const rowContainer = useRef();

  const filteredData = flag?data.filter((item) => item.category === flag):data;

  useEffect(()=>{
    if(rowContainer.current){
      rowContainer.current.scrollLeft += scrollValue1;
    }
  },[scrollValue1])

  return (
    <div ref={rowContainer} className='w-full overflow-auto scroll-smooth flex items-center gap-3 my-12'>
      <div className="flex items-center justify-evenly cursor-pointer space-x-6 px-4">
        {filteredData.map((item, index) => (
          <div key={index} className="w-[250px] h-[340px] bg-white rounded-lg p-2 px-4 border-solid border-2 border-gray-400">
            <motion.div whileHover={{ scale: 0.9 }}>
              <div className='w-full h-[320px] flex flex-col items-center justify-between'>
                <img src={item.image} alt={item.title} className='w-full h-full object-contain py-4' />
                <p className='md:text-lg'>{item.title}</p>
                <p className='text-textColor font-semibold text-base md:text-lg'>{item.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowContainer;
