import React from 'react'
import {motion} from"framer-motion"
import Grocery from "../images/grocery.webp"
import Mobiles from "../images/mobiles.webp"
import Clothes from "../images/clothes.webp"
import Electronics from "../images/eletronics.png"
import Appliances from "../images/appliances.webp"
import Travel from "../images/travel.webp"
import Bikes from "../images/bikes.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const ProductsContainer = () => {
  return (
    <section className='w-full my-6 bg-white' id="product">
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6'>
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className='w-24 min-w-[120px] h-30 cursor-pointer 
                rounded-lg drop-shadow-xl flex flex-col gap-3 items-center 
                justify-center'
                >
                    <img src={Grocery} className='w-15 h-2 flex flex-1 flex-row' alt="grocery" />
                    <p className='font-semibold Weight 800 text-slate-950'>Grocery</p>
                </motion.div>


                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className='w-24 min-w-[120px] h-30 cursor-pointer 
                rounded-lg drop-shadow-xl flex flex-col gap-3 items-center 
                justify-center'
                >
                    <img src={Mobiles} className='w-15 h-2 flex flex-1 flex-row' alt="mobile" />
                    <p className='font-semibold Weight 800 text-slate-950'>Mobiles</p>
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className='w-24 min-w-[120px] h-30 cursor-pointer 
                rounded-lg drop-shadow-xl flex flex-col gap-3 items-center 
                justify-center'
                >
                        <img src={Clothes} className='w-15 h-2 flex flex-1 flex-row' alt="clothes" />
                    <div className='flex  items-center gap-1'>
                        <p className=' font-semibold Weight 800 text-slate-950'>Fashion</p>
                        <FontAwesomeIcon icon={faCaretDown} className=' text-gray-400 cursor-pointer' />
                    </div>
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className='w-24 min-w-[120px] h-30 cursor-pointer 
                rounded-lg drop-shadow-xl flex flex-col gap-3 items-center 
                justify-center'
                >
                    <img src={Electronics} className='w-15 h-2 flex flex-1 flex-row' alt="electronics" />
                    <div className='flex  items-center gap-1'>
                        <p className='font-semibold Weight 800 text-slate-950'>Electronics</p>
                        <FontAwesomeIcon icon={faCaretDown} className=' text-gray-400 cursor-pointer' />
                    </div>
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className='w-24 min-w-[120px] h-30 cursor-pointer 
                rounded-lg drop-shadow-xl flex flex-col gap-3 items-center 
                justify-center'
                >
                    <img src={Appliances} className='w-15 h-2 flex flex-1 flex-row' alt="appliances" />
                    <p className='font-semibold Weight 800 text-slate-950'>Appliances</p>
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className='w-24 min-w-[120px] h-30 cursor-pointer 
                rounded-lg drop-shadow-xl flex flex-col gap-3 items-center 
                justify-center'
                >
                    <img src={Travel} className='w-15 h-2 flex flex-1 flex-row' alt="travel" />
                    <p className='font-semibold Weight 800 text-slate-950'>Travel</p>
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className='w-24 min-w-[120px] h-30 cursor-pointer 
                rounded-lg drop-shadow-xl flex flex-col gap-3 items-center 
                justify-center'
                >
                    <img src={Bikes} className='w-15 h-2 flex flex-1 flex-row' alt="bikes" />
                    <div className='flex  items-center gap-1'>
                        <p className='font-semibold Weight 800 text-slate-950'>Bikes</p>
                        <FontAwesomeIcon icon={faCaretDown} className=' text-gray-400 cursor-pointer' />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default ProductsContainer