import Image from 'next/image'
import Slide from '../../../public/image/slide.png'

const HeroSection = () => {
  return (
    <section className="bg-white ">
    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 lg:grid-cols-12 lg:ml-2">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl text-gray-900 font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl ">The first Tunisian  app in the field of <span className='text-[#058f1a]'>agricultural</span> guidance and information.</h1>
            <p className="max-w-2xl mb-6 font-light text- lg:mb-8 md:text-lg lg:text-xl ">Take your farming to the next level. We will help you manage your farm more efficiently and increase your productivity.</p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a href="" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-[#fff] bg-[#058f1a] rounded-lg sm:w-auto ">
            Get Started
                </a> 
                
            </div>
        </div>
        <div className="hidden   lg:col-span-5 lg:flex">
            <Image src={Slide}  alt="hero image" className='ml-6'/>
        </div>                
    </div>
</section>
  )
}

export default HeroSection