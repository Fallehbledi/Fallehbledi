import PricesCard from './pricesSection'
import WeatherCard from './WeatherCard'
import LastNews from './lastestNews'
import LastestProducts from './LastestProducts'
import GetUser from '@/helpers/getUser'
import PriceCard from '../dash/priceCard'
import ExpertCard from './ExpertCard'
import CommunityCard from './ForumCard'

interface User {
  firstName: string;
  lastName: string;
}
const dashHeroSection = async () => {
  const user: User | undefined = await GetUser()
   if(user){
return (
    <section className="bg-white  ">
      <div className=" flex  py-20">
    <div className="">
        <div className="mr-auto place-self-center mt-10 lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl text-gray-900 font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl ">Welcome <span className='text-[#058f1a]'>{user.firstName} {user.lastName}!</span></h1>
            <p className=" max-w-2xl mb-6 font-light text- lg:mb-8 md:text-lg lg:text-xl ">We’re glad to have you back! Let’s embark on another journey of discovery and creativity together! </p>
          <div className=" flex mt-24">
            <ExpertCard />

          <CommunityCard />
          </div>
        </div>
                     
    </div>
    <div className="space-y-4">
          <WeatherCard />
          <PriceCard />
    </div> 
    </div>
    <div className=" flex items-center justify-center space-x-4 ">
      <PricesCard />
      <LastNews />
      <LastestProducts />
    </div>
    
</section>

  )
   }
  
}

export default dashHeroSection