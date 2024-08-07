import { AiOutlineComment } from "react-icons/ai";
import moment from "moment";
import CommentAction from './commentAction'
import Link from 'next/link'
import GetUser from '../../helpers/getUser'
async function getData(page = 1, itemsPerPage = 4) {
  const url = `http://127.0.0.1:5000/api/post/getallpost?page=${page}&limit=${itemsPerPage}`;
  const res = await fetch(url, { next: { revalidate: 1 } });
  if (!res.ok) {
      throw new Error('Failed to fetch data');
  }
  return res.json();
}


 
const PostCard = async () => {
   const posts = await getData()
   const user = await GetUser()
  return (
    
    <div className="flex flex-col space-y-2">
    
     {posts.map((elem:any)=>{
return (
  <div className="p-4 border  md:w-[38rem] rounded-lg bg-white   flex items-center justify-start ">
  <div className="px-2 py-4 bg-white ">
    <div className="flex mb-4">
      <img className="w-12 h-12 rounded-full" src={elem.farmer.profileImage}/>
      <div className="ml-2 mt-0.5">
        <span className="block font-medium text-base leading-snug text-black ">{elem.farmer.firstName} {elem.farmer.lastName} </span>
        <span className="block text-sm text-gray-500  font-light leading-snug">
           {moment(elem.createdAt).fromNow()}
      </span>
      </div>
    </div>
    <h5 className="font-semibold">{elem.title}</h5>
    <p className="text-gray-800 w-[35rem] leading-snug py-2 md:leading-normal">{elem.content}</p>
    <div className="flex justify-center items-center mt-5 mb-5">
    <img src={elem.image}></img> 
    </div>
<div className=" text-gray-500 flex items-center  space-x-1   cursor-pointer font-light">
  <span>{elem.comments.length}</span>   
  <AiOutlineComment className="h-4 w-4"/> 
  <span>comments</span>
  </div>
  <div className="">
  <div className="max-w-xl mx-auto bg-white  rounded-lg p-4 ">
       <Link href={`/community/onepost?id=${elem.id}`}>
    <h5 className='py-3 text-gray-500 cursor-pointer underline '>Show more comments ({elem.comments.length})</h5>
       </Link>
  {elem.comments.map((elem:any)=>{
    return (
        <div className="flex items-start space-x-4 py-2">
            <div className="flex-shrink-0">
            <img className="w-10 h-10 rounded-full" src={user.profileImage}/>
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">{user.firstName} {user.lastName}</h3>
                    <span className="text-xs text-gray-500">{moment(elem.createdAt).fromNow()}</span>
                </div>
                <p className="mt-1 text-sm text-gray-700">{elem.comment}</p>
            </div>
        </div>
      )
    }) }
    </div>
    </div>
      <div className="mt-4 flex items-center justify-center space-x-2 ">
        <img className="w-10 h-10 rounded-full" src={elem.farmer.profileImage}/>
            <form action={CommentAction.bind(null,elem.id,1)} className="w-full  text-sm border border-gray-300 rounded-full" >
            <input name="comment" type="text"  placeholder={`Comment us ${user.firstName} ${user.lastName}`} className="w-full outline-none  text-sm p-2 border-gray-300 rounded-full"/>
            </form>        
        </div>
  </div>
</div>
)
     })   }
    </div>
    
  )
}

export default PostCard