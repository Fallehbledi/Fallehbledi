import UserHeroSection from '@/components/dash/dashHeroSection'
import GetUser from '../helpers/getUser'
import HeroSection from '@/components/herosection/HeroSection'
import FeaturesCard from '@/components/freaturescard/featuresCard'
import Testimotional from '@/components/dash/Testimotional'
import Plans from '../components/plans/AllPlans'
export default async function Home() {
const user = await GetUser()

    
  return (
    <>
    {!user && 
     <div className=" flex flex-col items-center justify-center">
      <HeroSection/>
      <FeaturesCard/>
      <Plans/>
      <Testimotional/>
     </div>

    }
    {user && 
    <div className="hero  flex items-center justify-center p-8">
    <UserHeroSection/>
    </div>}
    </>
  );
}
