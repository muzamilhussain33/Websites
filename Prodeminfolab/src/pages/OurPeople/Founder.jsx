import { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import img from '../../assets/images/5.png'


function Founder() {

  return (
    <div>
        <div className='w-[1900px] h-[1001px] flex flex-col justify-center' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          
                     <div className='w-[1790px] h-[38px] text-center text-[34px] text-white font-[600]'>
                      FOUNDER
                     </div>
                     <div className='w-[1790px] h-[167px] text-white text-[96px] font-[600] text-center'>
                      Preparing Journalism for the future.
                     </div>
               
                     
        </div>
      <Footer />
    </div>
  )
}

export default Founder;
