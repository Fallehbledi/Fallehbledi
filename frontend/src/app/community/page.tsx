
import Link from 'next/link';
import Image from "next/image"
import Icon from "../../../public/image/Team spirit-pana.png"
import Addpost from "./addpost";
import Moredetail from "./moredetail";
import Addcomment from './addcomment';
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
}
interface posts {
  id: number;
  firstName:string;
  lastName:string
  title:string;
  content:string;
  image:string;
  profileImage:string
  createdAt:string
}
async function getData() {
  const res = await fetch(`http://127.0.0.1:5000/api/post/getfarmerpost/3`, { next: { revalidate: 1 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;
  // const { searchParams } = props;
	// const showModal = searchParams?.modal === "true";
	// const postId = searchParams?.id;
  const data = await getData()
   console.log(data);
   
  return (
    <div className=" min-h-screen flex flex-col items-center">
           <div className="flex">
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
                 <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-4">
                   <h2 className="text-lg text-[#058f1a] font-semibold">Conversations</h2>
                   <h2 className="text-lg font-semibold">Categories</h2>
                 </div>
    
                 {/* <div className="space-y-4">
                   {data.map((post:posts) => (
                     <div key={post.id} className="bg-white p-4 rounded-lg shadow">
                       <div className="flex items-start space-x-4">
                        
                         <img
                           src={post.profileImage}
                           alt="User Avatar"
                           className="w-12 h-12 rounded-full object-cover"
                         />
                         <div>
                         <p className="text-lg font-semibold">{post.firstName}</p>
                         </div>
                         <div>
                           
                           <p className="text-sm font-medium text-gray-500">
                             {post.title}
                           </p>
                          <p className="text-gray-700">{post.content}</p>
                          <img
                           src={post.image}
                           alt="User Avatar"
                           className="w-12 h-12  object-cover"
                         />
                        </div>
                      </div>
                     </div>
                     
                  ))}
                </div> */}
                {data.map((post:posts) => (
                <div className="" key={post.id}>
        <div className="bg-white shadow-md rounded-md max-w-xl mx-auto mt-5">
          <div className="p-4 flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="ml-3">
              <div className="text-sm font-medium text-black">
                
              </div>
            </div>
          </div>
          <div className="px-4 pb-4 text-black text-base">
            {post.title}
          </div>
          <div className="relative">
            <img
              src={post.image}
              alt="Two people looking surprised at an Olympic performance on TV. One is wearing a blue tank top and the other a white shirt."
              className="w-full"
            />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 w-full p-4 text-center">
              
              <div className="text-xs text-gray-700">
                {post.content}
              </div>
              <div className="text-xs text-gray-500">
                Published on {post.createdAt}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 border-t border-gray-200 text-xs text-gray-700">
            
            <div className="flex space-x-4">
            <Link href="community/?show=true">
              <div className="flex items-center space-x-2">
                <i className="far fa-comment-alt"></i>
                <span> Comments</span>
              </div>
              </Link>
              {show && <Addcomment />}
            </div>
          </div>
        </div>
      
    
    </div>))}
                
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
             <Moredetail/> */}
           </div>
         
      );
}