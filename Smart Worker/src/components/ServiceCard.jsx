import { useState } from 'react'
import { Link } from 'react-router-dom';

function ServiceCard(props) {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[250px] h-[300px] bg-white shadow-md rounded-lg flex flex-col items-center justify-center m-4 p-2'>

        <img src="" alt="Service" className='w-[246px] h-[60%] rounded-lg bg-slate-500' />
        <h2 className='text-[20px] font-semibold mt-2'>Service Title</h2>
        <p className='text-[14px] text-gray-600 mt-1'>Service description goes here. It should be brief and informative.</p>
        <Link to='/servicesdetails' className='bg-amber-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-amber-700 transition duration-300'>
          {props.btn}
        </Link>

    </div>
  )
}

export default ServiceCard;
