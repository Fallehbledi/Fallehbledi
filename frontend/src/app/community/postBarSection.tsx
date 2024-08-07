import Link from 'next/link'
import PostAction from './PostsAction'
import { Suspense } from 'react'
import Loader from '../../components/loader'
import GetUser from '../../helpers/getUser'
const postBarSection = async () => {
  const user = await GetUser()
   
  return (
    
    <form action={PostAction.bind(null,user.userId)}>
    <div className=" bg-white rounded-lg shadow-lg w-[35rem]">
        <div className="border-b px-4 py-2 flex justify-between items-center">
            <h2 className="text-lg text-center font-semibold">Create a post</h2>
            <Link href='/community' className="text-gray-500 hover:text-gray-700">&times;</Link>
        </div>
        
        <div className="p-4">
            <div className="flex items-center space-x-3">
            <img className="w-12 h-12 rounded-full" src={user.profileImage}/>
            <div>
                    <p className="font-semibold">{user.firstName} {user.lastName}</p>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                 <svg className="h-4 w-4" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M113.66 23.69q-.345-.435-.72-.87A63.786 63.786 0 0 0 64.92.02C64.61.01 64.31 0 64 0s-.61.01-.92.02a63.789 63.789 0 0 0-48.15 22.96 6.164 6.164 0 0 0-.47.57.138.138 0 0 1-.03.04 63.8 63.8 0 0 0 0 80.82.138.138 0 0 1 .03.04 6.171 6.171 0 0 0 .47.57l.01.01a63.776 63.776 0 0 0 48.14 22.95c.614.02 1.226.02 1.84 0a63.786 63.786 0 0 0 48.02-22.8q.375-.435.72-.87a63.826 63.826 0 0 0 0-80.62zM99.49 62.25a106.208 106.208 0 0 0-4.07-28.03 69.57 69.57 0 0 0 16.19-7.51 60.158 60.158 0 0 1 12.86 35.54zM65.75 3.59c10.69 1.1 19.99 12.14 25.36 28.3a100.612 100.612 0 0 1-25.36 3.58zm-3.5 31.88a100.612 100.612 0 0 1-25.36-3.58c5.37-16.16 14.67-27.2 25.36-28.3zm0 3.5v23.28H32.01a104.4 104.4 0 0 1 3.85-27.02 104.159 104.159 0 0 0 26.39 3.74zm0 26.78v23.28a104.161 104.161 0 0 0-26.39 3.74 104.4 104.4 0 0 1-3.85-27.02zm0 26.78v31.88c-10.69-1.1-19.99-12.14-25.36-28.3a100.612 100.612 0 0 1 25.36-3.58zm3.5 0a100.612 100.612 0 0 1 25.36 3.58c-5.37 16.16-14.67 27.2-25.36 28.3zm0-3.5V65.75h30.24a104.477 104.477 0 0 1-3.85 27.03 103.333 103.333 0 0 0-26.39-3.75zm0-26.78V38.97a103.33 103.33 0 0 0 26.39-3.75 104.478 104.478 0 0 1 3.85 27.03zm43.6-38.26a66.171 66.171 0 0 1-14.98 6.91c-3.84-11.42-9.61-20.5-16.48-25.79a60.6 60.6 0 0 1 31.46 18.88zM50.11 5.11C43.24 10.4 37.47 19.48 33.63 30.9A67.031 67.031 0 0 1 18.65 24 60.513 60.513 0 0 1 50.11 5.11zM16.39 26.7a69.605 69.605 0 0 0 16.19 7.53 106.07 106.07 0 0 0-4.07 28.02H3.53A60.188 60.188 0 0 1 16.39 26.7zm12.12 39.05a106.069 106.069 0 0 0 4.07 28.02v.01a69.183 69.183 0 0 0-16.19 7.52A60.188 60.188 0 0 1 3.53 65.75zM18.65 104a67.031 67.031 0 0 1 14.98-6.9c3.84 11.42 9.61 20.5 16.48 25.79A60.514 60.514 0 0 1 18.65 104zm59.24 18.89c6.87-5.29 12.64-14.37 16.48-25.79a66.169 66.169 0 0 1 14.98 6.91 60.6 60.6 0 0 1-31.46 18.88zm33.72-21.6a69.573 69.573 0 0 0-16.19-7.51 106.208 106.208 0 0 0 4.07-28.03h24.98a60.158 60.158 0 0 1-12.86 35.54z"/></svg>
                        <span className="text-gray-700">Public</span>
                    </div>
                </div>
            </div>
            <textarea name='content'  placeholder={`What's new, ${user.firstName} ${user.lastName} ?`} className="w-full mt-3 p-2 border border-gray-300 rounded-lg focus:outline-none "/>
        </div>
        
        <div className="border-t px-4 py-2">
            <div className="flex items-center justify-between border px-4 py-3 rounded-lg ">
            <div className="flex items-center space-x-3">
            <h5 className="text-[15px] font-semibold">Add to your post:</h5>
    <label htmlFor="uploadFile1"className="flex text-white text-base outline-none rounded  cursor-pointer  font-[sans-serif]">
      <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png'></img>
      <input name='image' type="file" id='uploadFile1' className="hidden" />
    </label>
            </div>
            
    <button type='submit' className="text-[15px] bg-[#058f1a] text-white px-4 py-1.5 rounded">Publish</button>
           
            </div>
        </div>
    </div>
    </form>
  )
}

export default postBarSection