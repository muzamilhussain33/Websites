import { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import img from '../../assets/images/11.png'


function OurworkImpact() {

  return (
    <div>
     <div className='w-[1905px] h-[1001px] flex flex-col items-center justify-center' style={{ backgroundImage: `url('${img}')`, backgroundSize: 'cover' }}>
           <div className='w-[1790px] h-[38px] text-center text-[34px] text-white font-[600]'>
            IMPACT
           </div>
           <div className='w-[1790px] h-[167px] text-white text-[96px] font-[600] text-center'>
            2024 Impact Report
           </div>
     
           </div>
     <Footer />  
    </div>
  )
}

export default OurworkImpact;
