import { useState } from 'react'
import bg1 from '../assets/images/bg1.png'

function Signup() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center p-3'>
        <div className='w-[400px]  bg-white  p-6 rounded-2xl shadow-2xl flex flex-col items-center mb-[60px] text-[20px]'>
            <h1 className='text-2xl font-bold mb-4'>Signup</h1>
            <input type="text" placeholder="Name" className='w-full p-2 mb-4 border border-gray-300 rounded outline-0' />
            <input type="text" placeholder="Email" className='w-full p-2 mb-4 border border-gray-300 rounded outline-0' />
            <input type="password" placeholder="Password" className='w-full p-2 mb-4 border border-gray-300 rounded outline-0' />
            <button className='py-5 px-12 w-full bg-amber-800 text-white rounded-2xl m-3 hover:bg-amber-700 transition duration-300'>Signup</button>
            <p className='text-gray-500'>Already have an account? <a href="/login" className='text-amber-800 hover:underline'>Login</a></p>
        </div>
        

    </div>
  )
}

export default Signup;
