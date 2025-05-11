import img from '../assets/images/2.jpg'

function ServiceDetails() {

  return (
    <div>
      <div className='w-full h-full' style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className='w-[1300px] h-[500px]'>
            <h1 className=''>Service Name</h1>
          </div>
        
      </div>

        
    </div>
  )
}

export default ServiceDetails;
