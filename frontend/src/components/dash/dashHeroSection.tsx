

const dashHeroSection = () => {
  return (
    <section className="bg-white ">
    <div className="grid max-w-screen-xl px-4 pt-[5rem] pb-2 mx-auto lg:gap-8 lg:grid-cols-12 lg:ml-2">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl text-gray-900 font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl ">Welcome <span className='text-[#058f1a]'>Username!</span></h1>
            <p className="max-w-2xl mb-6 font-light text- lg:mb-8 md:text-lg lg:text-xl ">We’re glad to have you back! Let’s embark on another journey of discovery and creativity together! </p>
        </div>
        <div className="hidden   lg:col-span-5 lg:flex">
        </div>                
    </div>
</section>

  )
}

export default dashHeroSection