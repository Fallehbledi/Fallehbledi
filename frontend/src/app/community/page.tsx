import PostCard from './PostCard'
import PostBarSection from './postBarSection';
import Link from 'next/link'
import GetUser from '../../helpers/getUser'
import CommImage from '../../../public/image/Status update.gif'
import Image from 'next/image'
import CommunityFeatures from './communityFeatures';
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
}


export default async function Page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;
  const user = await GetUser()
  return (
    <>
    {!user &&
    <div className="">
    <section className="bg-white flex items-center justify-center px-20 ">
    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 lg:grid-cols-12 lg:ml-2">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="heroSection max-w-2xl mb-4 text-3xl text-gray-900 font-extrabold md:text-5xl xl:text-5xl ">Share Your thoughts in our  <span className='text-[#058f1a] mt-10'> Community </span> designed to bring farmers together like never before! 🌾🤝</h1>
            <p className="heroSection  max-w-2xl mb-6 font-light text- lg:mb-8 md:text-lg lg:text-xl ">Join us today and become a part of our growing community. Together, we can make farming more productive and sustainable! 🌱</p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Link href="/signup" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-[#fff] bg-[#058f1a] rounded-lg sm:w-auto ">
            Get Started
                </Link> 
                
            </div>
        </div>
        <div className="hidden   lg:col-span-5 lg:flex">
            <Image src={CommImage} width={450} height={200}  alt="hero image" className=''/>
        </div>                
    </div>
</section>
<CommunityFeatures />
</div>
}
    {user && 
    
      <div className="py-[7rem] flex flex-col items-center  justify-center    ">
      <div className="writepost">
      <div className=" flex flex-col bg-white  ">
        <div className="">
            <h5 className="font-semibold px-4 py-2 text-gray-900">Share your thoughts</h5>
        </div>
    <div className="bg-white rounded-lg  p-4 flex items-center space-x-4">
    <img className="w-12 h-12 rounded-full" src={user.profileImage}/>
    <div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full ">
            <Link href='/community?show=true'>
            <h1 className=" p-2 border cursor-pointer text-gray-500 w-[16rem] md:w-[32rem] border-gray-300 rounded-full ">
            What's New , {user.firstName} {user.lastName} ?
            </h1>
            </Link>
        </div>
    </div>
</div>
{show&& <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 ">
<PostBarSection/>
</div>}
      </div>
      <h5 className='font-semibold text-gray-900 '>Lastes Posts </h5>
      <div className="py-6">
        <PostCard/>
      </div>
      </div>}
      </>
  )
}

    {/*<div className=" min-h-screen flex flex-col items-center">
           <div className=" hidden">
           <div className="pt-32 pb-8 ">
             <h1 className="text-4xl font-semibold">Express Your Opinion and Thoughts</h1>
            <p className="text-[16px] font-medium mt-2 w-[44rem]">
             We value your unique perspective and invite you to share your experiences with our community. Whether it's a memorable moment, a challenging situation, or a significant achievement, your story can inspire and resonate with others.        </p>
          </div>
           <div className="mt-20">
             <Image src={Icon} alt='' width={350}></Image>
           </div>
           </div>
    
           <div className="w-full max-w-5xl p-4 flex-grow flex justify-center items-center">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
               <div className="md:col-span-2">
                 <div className="writepost">
                  <div className="w-full ">
                  <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
</div>
                  </div>
                 </div>
                {data.map((post:posts) => (
                  <div className="">

                  </div>
                ))}
                
               </div>
    
               <div className="space-y-4">
               <Link href="community/?show=true">
                 <div className="bg-white p-4 rounded-lg shadow text-center">
                   <p className="text-lg font-semibold mb-2">
                     Want to be part of this community?
                   </p>
                   <button className="bg-[#058f1a] text-white py-2 px-4 rounded">
                     Express your thoughts
                   </button>
                 </div>
                 </Link>

    {show && <Addpost />}
                 </div>
               </div>
             </div>
             {/* <Addpost/>
             <Addcomment/>
             <Moredetail/> 
           </div>*/}