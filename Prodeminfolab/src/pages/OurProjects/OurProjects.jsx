import { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import img from '../../assets/images/9.png';


function OurProjects() {

  return (
    <div>

      <div className='w-[1905px] h-[1001px] flex flex-col items-center justify-center' style={{ backgroundImage: `url('${img}')`, backgroundSize: 'cover' }}>
        <div className='w-[1790px] h-[38px] text-center text-[34px] text-white font-[600]'>
          OUR PROJECTS
        </div>
        <div className='w-[1790px] h-[167px] text-white text-[96px] font-[600] text-center'>
          We’re testing modern news solutions.
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default OurProjects;
