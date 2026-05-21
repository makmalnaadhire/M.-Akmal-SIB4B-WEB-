export default function holidayPage() {
  return (
    <div className="bg-gray-200 h-screen flex gap-10 justify-center items-center">
        <div className="bg-white h-screenc h-130 w-80 rounded-4xl justify-evenly shadow-2xl">
            <div className="flex gap-4 justify-center">
                <img src="/golden.jpg" className="w-75 h-75 mt-2.5 rounded-3xl"/>
            </div>
            <div className="ml-6 mt-3">
                <h1 className="text-3xl text-black font-bold">San Francisco</h1>
                <p className="text-black font-medium">Premium Economy</p>
            </div>
            <div className="mt-4 flex">
                <div className="ml-6 flex gap-3">
                   <img src="/tag.svg" alt="icon" className="w-6 h-6"/>
                   <p className="text-black font-bold">from $240</p>
                </div>
                <div className="ml-6 flex gap-3">
                   <img src="/plane.svg" alt="icon" className="w-6 h-6"/>
                   <p className="text-black font-bold">SFO</p>
                </div>  
            </div>
            <div className="justify-between items-center mt-6 ml-6 mr-6">
                <div className="flex justify-between">
                    <button className="bg-black text-white px-4 py-2 rounded-3xl">Search Flight
                    </button>
                    <div>
                      <button className="items-center">
                        <img src="/heart.svg" className="w-10 h-10 rounded-full border-1 items-center border-black"/>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}