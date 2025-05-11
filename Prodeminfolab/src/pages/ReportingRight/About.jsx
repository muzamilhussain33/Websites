import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import img from '../../assets/images/10.png'
import { Link } from 'react-router-dom'


function About() {

  return (
    <div>

      <div className='w-[1900px] h-[1001px] flex items-center justify-center' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        <div className='w-[1444px] h-[461px] flex flex-col items-center justify-center'>
          <h1 className='text-[96px] font-[400] text-white'>Reporting Right </h1>
          <h3 className='text-[64px] text-white font-[400]'>A Weekly Guide for Journalists Who Cover The Truth.</h3>
          <Link to='/' className='w-[192px] h-[65px] bg-red-500 text-white text-[30px] flex items-center justify-center'>READ NOW</Link>
        </div>

      </div>

      <div className='w-[100%] h-[726px] bg-[#181852] flex flex-col items-center justify-center p-[100px]'>
          <h2 className='w-[1662px] h-[282px] text-[80px] font-[600] text-[#FF455B]'>Reporting Right is a long-term media and democracy project.</h2>
          <div className='w-[1662px] h-[336px] text-[40px] font-[500] text-[#F8ECDB]'>
            <div className='mb-[50px]'>It aims to support local Journalists by arming them with easy-to-access information, data and useful background on the often-well-disguised anti-democratic forces that threaten the communities they cover. </div>
            <div>Detecting misinformation and determining the credibility of sources is a problem for the general population. It is also a problem for journalists.</div>
          </div>
      </div>


      <div className='w-[100%] h-[628px] flex flex-col items-center justify-center p-[100px]'>
          <h2 className='w-[1662px] h-[282px] text-[80px] font-[600] text-[#FF455B]'>Reporting Right’s Statement of Ethics </h2>
          <div className='w-[1662px] h-[336px] text-[40px] font-[500] text-[#00005B]'>
            <div className='mb-[50px]'>It aims to support local Journalists by arming them with easy-to-access information, data and useful background on the often-well-disguised anti-democratic forces that threaten the communities they cover. </div>
            <div>Detecting misinformation and determining the credibility of sources is a problem for the general population. It is also a problem for journalists.</div>
          </div>
      </div>

      <Footer />
    </div>
  )
}

export default About;
