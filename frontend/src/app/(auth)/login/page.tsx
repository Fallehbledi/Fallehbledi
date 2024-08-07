import Image from 'next/image'
import Farmer from '../../../../public/image/Farmer-bro.png'
import LoginForm from './LoginForm'
const page = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <div className=" absolute hidden md:flex md:flex-col items-center mr-96">
      <h5 className='w-[36rem] text-2xl font-bold mt-28'>Prepare to <span className='text-[#058f1a]'>cultivate</span>, <span className='text-[#058f1a]'>nurture</span>, and <span className='text-[#058f1a]'>grow</span> your virtual farm from the ground up. Enjoy your farming experience!</h5>          
      <Image src={Farmer}  width={300} alt=''></Image>
      </div>
   <div className="">
   <LoginForm/>
      </div>
    </div>
  )
}

export default page