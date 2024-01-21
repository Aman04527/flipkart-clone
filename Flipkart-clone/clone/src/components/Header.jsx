import React , {useState} from 'react'
import Logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faCartShopping, faEllipsisVertical, faSearch , faShop, faUser  } from '@fortawesome/free-solid-svg-icons';
import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
import { auth,app } from "../config/firebase.config"
import {useStateValue} from "../context/StateProvider"
import { actionType } from '../context/reducer';
import Avatar from '../images/836.jpg'



const Header = () => {
  const [showDropdown , setShowDropdown] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const firebaseAuth = getAuth(app);
  const [{user},dispatch] = useStateValue();
  const [isMenu,setIsMenu] = useState(false);

  const toggleDropdown = () =>{
    setShowDropdown(!showDropdown);
  }
  
  const handleLoginAction = async () =>{
    if(!user){
      //destructing the data 
      const {user: {refreshToken , providerData}} = await signInWithPopup(firebaseAuth,googleProvider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user" , JSON.stringify(providerData[0]));
    }
  }

  const MenuCont = () =>{
    setIsMenu(!isMenu);
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

              <div >
                <img
                  src={user ? user.photoURL : Avatar}
                  className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                  alt="userprofile"
                  onClick={handleLoginAction}
                />
              </div>


              <div className="relative">
                <FontAwesomeIcon icon={faShop} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Link
                  to={"/"}
                  className="text-base text-slate-700 hover:text-[#2e2e2e] duration-100 transition-all ease-in-out cursor-pointer pl-6"
                  onClick={MenuCont}
                >
                  Become A Seller
                {isMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="w-40 bg-gray-100 shadow-xl rounded-lg absolute top-12 right-0"
                  >
                    {user && user.email === "jha04527@gmail.com" && (
                      <Link to={"/CreateContainer"}>
                        <p
                          className="px-4 py-2 flex items-center gap-3 cursor-pointer 
                            hover:bg-slate-100 transition-all duration-100 ease-in-out 
                            text-textColor text-base"
                          onClick={() => setIsMenu(false)}
                        >
                          New Item
                        </p>
                      </Link>
                    )}
                  </motion.div>
                )}
                
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