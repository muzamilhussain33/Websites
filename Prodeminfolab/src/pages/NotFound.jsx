import { useState } from 'react'
import img from '../assets/images/NotFound.jpg'


function NotFound() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100%] h-[95vh] flex justify-center items-center '>
      <img src={img} alt="Page not Found" className='w-100% h-[700px]'/>
    </div>
  )
}

export default NotFound;
