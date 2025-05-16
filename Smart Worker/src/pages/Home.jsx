import { useState } from 'react'
import bg from '../assets/images/bg.png'
import { IoSearch } from 'react-icons/io5'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className='pt-[80px] min-h-[100vh]'>
      <div
        className="w-full bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: `url(${bg})` }}>


        <div className="w-[1300px] h-[500px] flex flex-col items-center justify-center m-auto">
          <h1 className='text-[30px] sm:text-[35px] md:text-[48px] lg:text-[52px] font-bold my-3'>Browse Services</h1>


          <div className='w-full h-12 flex items-center justify-center mt-4 '>
            <input
              type="text"
              placeholder='search here'
              className='border border-amber-600 rounded-l-4xl outline-none p-4 w-[220px] sm:w-[300px] md:w-[400px] lg:w-[500px] lg:text-2xl' />
            <button className='bg-amber-600 p-5 lg:p-6 rounded-r-4xl w-[70px] lg:w-[90px] flex items-center justify-center hover:bg-amber-700 transition duration-300'>
              <IoSearch color='white' size={20} />
            </button>
          </div>

        </div>

      </div>
      <div className='bg-amber-50'>
      <div className='max-w-[1300px] h-[500px] flex flex-col justify-center m-auto gap-7'>

        <div className='w-full h-[100px] flex items-center justify-between px-5 '>
          <h2 className='text-2xl font-semibold'>Hot services</h2>
          <Link to='/services' className='bg-amber-600 hover:bg-amber-700 transition duration-300 py-3 px-5 rounded-4xl text-white'>View all</Link>
        </div>

        <div className='flex overflow-scroll scrollbar-hide'>
        <ServiceCard btn='View Details'/>
        <ServiceCard btn='View Details'/>
        <ServiceCard btn='View Details'/>
        <ServiceCard btn='View Details'/>
        <ServiceCard btn='View Details'/>
        <ServiceCard btn='View Details'/>
        <ServiceCard btn='View Details'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home;
