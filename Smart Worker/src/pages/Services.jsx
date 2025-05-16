import { useState } from 'react'
import bg from '../assets/images/1.jpg'
import ServiceCard from '../components/ServiceCard';

function Services() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-auto  bg-gray-100 pt-[80px]'>
        <div className='w-full h-[400px] flex flex-col items-center justify-center m-auto p-5 text-amber-700' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className='text-[96px] font-bold '>Services</h1>
            <p className='text-[28px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, earum!</p>
        </div>
        <div className='max-w-[1300px] flex flex-wrap justify-center mx-auto gap-7 my-[50px]'>
          <ServiceCard btn='View Details' />
          <ServiceCard btn='View Details'/>
          <ServiceCard btn='View Details'/>
          <ServiceCard btn='View Details'/>
          <ServiceCard btn='View Details'/>
          <ServiceCard btn='View Details'/>
          <ServiceCard btn='View Details'  />
          <ServiceCard btn='View Details'/>
          <ServiceCard btn='View Details'/>
          <ServiceCard btn='View Details'/>
        </div>
    </div>
  )
}

export default Services;
