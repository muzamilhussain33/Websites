import { useState } from 'react'
import bg1 from '../assets/images/bg1.png'
import { Link } from 'react-router-dom';

function Loginsignup() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center p-3'
         style={{ backgroundImage: `url(${bg1})` }}>\

        

        <div className='w-[400px]  bg-white bg-opacity-50  p-6 rounded-2xl shadow-lg flex flex-col items-center mb-[60px] text-[20px]'>
            <Link to='/login' className='py-5 px-12 w-full bg-amber-800 text-white rounded-2xl m-3 hover:bg-amber-700 transition duration-300'>Login</Link>
            <Link to='/signup' className='py-5 px-12 w-full bg-amber-800 text-white rounded-2xl m-3 hover:bg-amber-700 transition duration-300'>Signup</Link>
        </div>



    </div>
  )
}

export default Loginsignup;
