
const expertCard = () => {
  return (
    <div className=" rounded-xl border bg-white px-4 shadow-md sm:mx-auto sm:max-w-xl sm:px-8">
  <div className="mb-2 flex flex-col gap-y-6 border-b py-8 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex items-center">
      <img className="h-14 w-14 rounded-full object-cover" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" alt="Simon Lewis" />
      <div className="ml-4 w-56">
        <p className="text-slate-800 text-xl font-extrabold">Richard Hendricks</p>
        <p className="text-slate-500">Algorithms Expert</p>
      </div>
    </div>
  </div>
  <div className="mb-2 flex justify-between border-b py-8 text-sm sm:text-base">
    <div className="flex flex-col items-center">
      <p className="text-slate-700 mb-1 text-xl font-extrabold">14</p>
      <p className="text-slate-500 text-sm font-medium">Services</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="text-slate-700 mb-1 text-xl font-extrabold">1124</p>
      <p className="text-slate-500 text-sm font-medium">Farmers</p>
    </div>
    
    
  </div>
  <div className="flex justify-end py-8">
    <button className="rounded-lg border-2 border-transparent bg-[#058f1a] px-4 py-2 font-medium text-white ">Enroll</button>
  </div>
  </div>
  )
}

export default expertCard