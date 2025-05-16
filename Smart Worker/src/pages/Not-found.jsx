import { useState } from 'react'
import NotFoundImage from '../assets/images/notFound.jpg'
import { Link } from 'react-router-dom'

function NotFound() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100%] h-auto min-h-[100vh] flex flex-col items-center justify-center mb-20 pt-[80px]'>
      <img className="w-[700px] m-6" src={NotFoundImage} alt="" />
      <Link to="/" className='py-3 px-10 rounded-xl border-amber-400 border-2 text-2xl text-amber-800 '>Back To Home</Link>
    </div>
  )
}

export default NotFound;
