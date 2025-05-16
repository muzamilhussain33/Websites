import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";

function BookNow() {
  return (
    <div className="w-full h-auto min-h-[100vh] pt[80px] py-30">
      <div className="w-[1300px] h-[800px] border-2 border-amber-700 mx-auto rounded-2xl p-5 flex flex-col items-end justify-between bg-white shadow-md mt-20">
        <div className="w-full h-auto">
        <div className="w-full h-auto flex items-center justify-start gap-2">

          <CgProfile size={80} />
          <div>
            <h1 className="font-bold text-[36px]">Worker name</h1>
            <div className="flex gap-2">
              <IoLocationOutline />
              <p className="text-[14px]">Address</p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto">
          <h4 className="text-[24px] font-bold mt-5">My Services:</h4>
          <p className="text-[14px] text-gray-600 mt-2 w-[60%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        </div>

        <div className="w-full h-auto mt-5 flex items-center justify-between">
          <div>
            <h4 className="font-semibold">I am Available From <span className="border-2 border-amber-700 p-2 rounded-4xl text-amber-700 font-bold">9:00 AM</span> To <span className="border-2 border-amber-700 p-2 rounded-4xl text-amber-700 font-bold">5:00 PM</span> </h4>
          </div>

          <div className="flex items-center justify-center gap-5 mr-10 border-1 border-amber-700 p-2 rounded-2xl">
            <h4 className="font-semibold">Charges per Hour :</h4>
            <p className="text-[24px] font-bold text-amber-700">Rs. 500</p>
          </div>
        </div>

        <div className="w-full h-auto mt-10">
          <h4 className="font-[500]">If You Want to hire that worker then Choose time and Send Request to him</h4>
          <div className="w-full h-auto flex items-center gap-50 mt-5">
            <div className="mt-2">
              <h4 className="font-bold">Starting Time :</h4>
              <div className="border-2 border-amber-700  p-3 rounded-4xl  my-3 text-[16px] text-amber-700">
                <input type="text" placeholder="enter starting time...." className="outline-none"/>
                <select id="Time" className="w-[50px] outline-none">
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
            <div className="mt-2">
              <h4 className="font-bold">Ending Time :</h4>
              <div className="border-2 border-amber-700  p-3 rounded-4xl  my-3 text-[16px] text-amber-700">
                <input type="text" placeholder="enter ending time...." className="outline-none"/>
                <select id="Time" className="w-[50px] outline-none">
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        </div>

        <button className="bg-amber-600 p-3 rounded-lg text-white hover:bg-amber-700 mr-10 mb-5">Send Request</button>

      </div>

    </div>
  )
}

export default BookNow