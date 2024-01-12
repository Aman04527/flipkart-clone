import React , {useState} from 'react'
import Logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faCartShopping, faEllipsisVertical, faSearch , faShop, faUser  } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  const [showDropdown , setShowDropdown] = useState(false);

  const toggleDropdown = () =>{
    setShowDropdown(!showDropdown);
  }

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-white'>
        <div className='hidden md:flex w-full h-full items-center justify-between px-4 md:px-0 mx-auto'>
          <Link to={"/"} className="flex items-center gap-1">
            <img src={Logo} className='w-[150px] object-cover' alt="logo" />
          </Link>
          <div className="pl-15 flex-1 relative ">
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for Products , Brand And More"
              autoComplete="off"
              className="pl-10 w-full border-none border-gray-300 text-base rounded px-3 py-1 bg-slate-100"
            />
          </div>
          <div className="flex items-center gap-8 pl-10">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex items-center gap-24"
            >
              <div className="relative ">
                <FontAwesomeIcon icon={faUser} className="text-gray-400 cursor-pointer"/>
            
                {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md py-2 z-10">
                  <Link to={"/profile"} className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                  <Link to={"/notifications"} className="block px-4 py-2 hover:bg-gray-100">Notifications</Link>
                  <Link to={"/logout"} className="block px-4 py-2 hover:bg-gray-100">Logout</Link>
                </div>
                )}
                <Link
                  to={"/"}
                  className="text-base text-slate-700 hover:text-[#2e2e2e] duration-100 transition-all ease-in-out cursor-pointer pl-2 pr-2"
                  onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}
                >
                  Account
                </Link>
                <FontAwesomeIcon icon={faCaretDown} className='text-gray-400 cursor-pointer' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} />
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md py-2 z-10">
                    <Link to={"/profile"} className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                    <Link to={"/notifications"} className="block px-4 py-2 hover:bg-gray-100">Notifications</Link>
                    <Link to={"/logout"} className="block px-4 py-2 hover:bg-gray-100">Logout</Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <FontAwesomeIcon icon={faCartShopping} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <div
                  className="absolute -top-5 -right-5  w-5 h-5 rounded-full bg-red-600 
                flex items-center justify-center"
                >
                  <p className="relative text-xs text-white font-semibold">
                    2
                  </p>
                </div>
                <Link
                  to={"/"}
                  className="text-base text-slate-700 hover:text-[#2e2e2e]  pl-6"
                >
                  Cart
                </Link>
              </div>

              <div className="relative">
                <FontAwesomeIcon icon={faShop} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Link
                  to={"/"}
                  className="text-base text-slate-700 hover:text-[#2e2e2e] duration-100 transition-all ease-in-out cursor-pointer pl-6"
                >
                  Become A Seller
                </Link>
              </div>

              <div className='relative'>
                <FontAwesomeIcon icon={faEllipsisVertical} className='absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400' />
                <Link to = {"/"} className="text-base text-slate-700 hover:text-[#2e2e2e] duration-100 transition-all ease-in-out cursor-pointer pl-6">

                </Link>

              </div>

            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-between md:hidden w-full h-full ">
          <div className='relative flex items-center justify-center'>
            <FontAwesomeIcon icon={faBars} className="text-textColor text-2xl cursor-pointer" />
          </div>

          <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} className='w-[150px] object-cover pl-6' alt="logo" />
          </Link>
          <div className="flex items-center gap-8 pl-10">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex items-center gap-2"
            >
              
              <div className="relative ">
                <FontAwesomeIcon icon={faUser} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Link
                  to={"/"}
                  className="text-base text-slate-700 hover:text-[#2e2e2e] duration-100 transition-all ease-in-out cursor-pointer pl-6"
                >
                </Link>
              </div>

              <div className="relative">
                <FontAwesomeIcon icon={faCartShopping} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <div
                  className="absolute -top-2 -right-1  w-5 h-5 rounded-full bg-red-600 
                flex items-center justify-center"
                >
                  <p className="relative text-xs text-white font-semibold">
                    2
                  </p>
                </div>
                <Link
                  to={"/"}
                  className="text-base text-slate-700 hover:text-[#2e2e2e] duration-100 transition-all ease-in-out cursor-pointer pl-6"
                >
                </Link>
              </div>


            </motion.div>
          </div>

        </div>
    </header>
  )
}

export default Header