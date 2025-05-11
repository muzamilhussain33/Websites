import { useState } from 'react'
import logo from '../assets/images/logo.png'
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
  const [count, setCount] = useState(0);

  const handleMenuClick = () => {
    // Handle menu click logic here
    console.log("Menu clicked");
  };

  return (
    <div className="w-full h-[80px]  flex items-center  bg-white shadow-md z-10">


      <div className='w-[1300px] h-full m-auto flex items-center justify-between px-7'>

        
        <Link to='/home' className='w-[150px] md:w-[300px] flex items-center h-[100%] text-[13px] md:text-[18px] font-medium md:font-semibold'>
          <img className='w-[50px] md:w-[100px]' src={logo} alt="logo" />
          <p className='mt-[10px]'>Smart Worker</p>
        </Link>


        <div className='md:hidden'>
          <MdOutlineMenu size={30} onClick={handleMenuClick} />
        </div>
        <div className='hidden md:flex items-center justify-evenly gap-[20px] text-[18px] '>
          <Link to="/services" className='hover:text-amber-600 transition duration-300'>Services</Link>
          <Link to="/login-signup" className='hover:text-amber-600 transition duration-300'>Login/Signup</Link>
          <Link to="" className='border-black border-1 px-3 py-2 rounded-4xl hover:bg-amber-600 hover:border-amber-600 hover:text-white transition duration-300'>Become a Worker</Link>
        </div>


      </div>


      
    </div>
  )
}

export default Navbar;
