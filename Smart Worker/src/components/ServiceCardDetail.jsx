import { Link } from "react-router-dom";

function ServiceCardDetail(props) {
  return (
    <div className='w-full h-auto bg-white shadow-md rounded-lg flex items-center justify-between m-4 py-4 px-6'>
        <div className="flex items-start justify-center gap-7">
        <img src="" alt="Service" className='w-[300px] h-[180px] rounded-lg bg-slate-500' />
        <div className="w-auto h-full flex flex-col ">
        <h2 className='text-[20px] font-semibold mt-2'>Worker Name</h2>
        <p className='text-[14px] text-gray-600 mt-1'>Service description goes here. It should be brief and informative.</p>
        <Link to='/book-now' className='bg-amber-600 w-[150px] text-white px-4 py-2 rounded-lg mt-3 hover:bg-amber-700 transition duration-300'>
          {props.btn}
        </Link>
        </div>
        </div>

    </div>

    
  )
}

export default ServiceCardDetail;