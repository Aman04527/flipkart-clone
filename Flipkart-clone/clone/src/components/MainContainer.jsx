import React, {  useEffect, useState } from 'react'
import Image1 from "../images/image1.webp"
import Image2 from "../images/image2.webp"
import {motion} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import ProductsContainer from './ProductsContainer'
import RowContainer from './RowContainer'
import CardBar from "../images/kotak.webp"

const MainContainer = () => {

    const [currentImage , setCurrentImage] = useState(true);

    const [scrollValue1,setScrollValue1] = useState(0);

    useEffect(() => {} , [scrollValue1]);

    const toggleImage  = () => {
        setCurrentImage((prevImage) => !prevImage); 
    }



    useEffect(()=>{
        const interval = setInterval(() =>{
             setCurrentImage((prevImage) => !prevImage);
        },3000);
        return () => clearInterval(interval);
    } , []);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <ProductsContainer />

        <section className='py-6 -px-10'>
            <div className='relative flex  items-center '>
              <motion.div
                className='w-full h-full flex overflow:hidden'
                initial={{ x: 0 }}
                // animate={{ x: currentImage ? 0 : '-50%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                <img src={currentImage ? Image1 : Image2}
                    className='w-full lg:w-auto lg:h-650 relative'
                    alt={currentImage ? 'Image1' : 'Image2'}
                />
                <div className='hidden md:flex gap-3 items-center'>
                    <motion.div
                    // whileTap={{ scale: 0.75 }}
                        className="w-8 h-8 rounded-lg 
                    cursor-pointer
                     flex items-center justify-center"
                        onClick={toggleImage }
                    >
                        <FontAwesomeIcon
                        icon={faChevronCircleLeft}
                        className='absolute top-1/2 transform -translate-y-1/2 left-0 w-8 h-8 text-gray-400 cursor-pointer'
                        />
                    </motion.div>
                </div>
                <div className='hidden md:flex gap-3 items-center'>
                <motion.div
                    // whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-lg cursor-pointer flex items-center justify-center"
                    onClick={toggleImage }
                >
                    <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    className='absolute top-1/2 transform -translate-y-1/2 right-0 w-8 h-8 text-gray-400 cursor-pointer'
                    />
                </motion.div>
                </div>
              </motion.div>

            </div>
        </section>

        <section className='py-6 px-0'>
            <div className='relative flex  items-center '>
                <img src={CardBar} alt="" className='w-full lg:w-auto lg:h-650 relative'/>
            </div>

        </section>

        <section className='w-full my-6 bg-white relative'>
            <div >
                <h1 className='font-semibold text-xl text-slate-950 py-4 px-4'>Best Of Electronics</h1>
                <RowContainer flag={'Electronics'} scrollValue1={scrollValue1} wrapping={false} />
                <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    className='absolute top-1/2 transform -translate-y-1/2 right-0 w-8 h-8 text-gray-400 cursor-pointer'
                    onClick={() => setScrollValue1(scrollValue1 + 600)}
                />
            </div>
        </section>
        <section className='w-full my-6 bg-white relative'>
            <div>
                <h1 className='font-semibold text-xl text-slate-950 py-4 px-4 '>Beauty, Toys, Foods & More</h1>
                <RowContainer flag={'CateToys'} scrollValue={scrollValue1} wrapping={false}/>
                <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    className='absolute top-1/2 transform -translate-y-1/2 right-0 w-8 h-8 text-gray-400 cursor-pointer'
                />
            </div>
        </section>
    </div>
  )
}

export default MainContainer