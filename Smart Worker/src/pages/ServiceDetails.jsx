import img from '../assets/images/2.jpg'
import bg from '../assets/images/1.jpg'
import ServiceCard from '../components/ServiceCard';
import ServiceCardDetail from '../components/ServiceCardDetail';

function ServiceDetails() {

  return (
    <div className='w-full h-auto min-h-[100vh] pt-[80px] bg-gray-200 flex flex-col items-center justify-center'>
      <div className='w-full h-[400px] flex flex-col items-center justify-center m-auto p-5 text-amber-700' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className='text-[96px] font-bold'>Service</h1>
        <p className='text-[28px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, earum!</p>
      </div>

      <div className='w-[1300px] flex justify-between my-[50px]'>
        <div className='max-w-[70%] flex flex-wrap justify-center'>
          <ServiceCardDetail btn='Book Now' />
          <ServiceCardDetail btn='Book Now' />
          <ServiceCardDetail btn='Book Now' />
          <ServiceCardDetail btn='Book Now' />
          <ServiceCardDetail btn='Book Now' />
          <ServiceCardDetail btn='Book Now' />
          <ServiceCardDetail btn='Book Now' />
          <ServiceCardDetail btn='Book Now' />
          <ServiceCardDetail btn='Book Now' />
          <ServiceCardDetail btn='Book Now' />
        </div>

        <div className='w-[30%] h-auto bg-white m-4 rounded-lg py-10 px-5'>
            <div className='w-full h-auto flex flex-col justify-center'>
              <h1 className='text-xl text-amber-700'>Search Your City : </h1>
                <input
                  type="text"
                  placeholder='search here'
                  className='border border-amber-700  outline-none p-3 rounded-4xl w-full my-3 text-16px text-amber-700' />
            </div>  
        </div>  

      </div>

    </div>
  )
}

export default ServiceDetails;
