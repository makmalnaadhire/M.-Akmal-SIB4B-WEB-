export default function holidayPage() {
  return (
    <div className="bg-gray-200 h-screen flex gap-10 justify-center items-center">
        <div className="bg-white h-screenc h-140 w-80 rounded-4xl shadow-lg">
            <div className="flex gap-4 justify-center">
                <img src="/golden.jpg" className="w-75 h-75 mt-2.5 rounded-3xl"/>
            </div>
            <div className="ml-6 mt-3">
                <h1 className="text-3xl text-black font-bold">San Francisco</h1>
                <p className="text-black font-medium">Premium Economy</p>
            </div>
            <div className="flex-col">
                <div className="flex-row">
                   <img src="/tag.svg" alt="icon" className="w-6 h-6"/>
                   <p className="text-black font-medium">from $240</p>

                </div>
            </div>
        </div>
    </div>
  )
}