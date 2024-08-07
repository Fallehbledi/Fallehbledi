import Link from 'next/link';
import axios from 'axios'
import { revalidatePath } from 'next/cache'

const addcomment = () => {
    const createcomment = async (formData: FormData) => {
        'use server'
        try {
          const comments = {
            comment: formData.get("comment"),
            postId:1,
            farmerId:3
          };
          const response = await fetch("http://127.0.0.1:5000/api/comment/add",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(comments)
        });
        if(response.ok){
          revalidatePath('/community')
      }
     
        

        } 
        catch (error) {
            console.log(error);  
        }
        
      }
      return(
        <div >
            <form action={createcomment}>
<div className="p-2 w-full">
          <div className="relative">
            <label  className="leading-7 text-lg text-gray-900">comment</label>
            <input
              type="text"
              id="comment"
              name="comment"
              
              className="w-full bg-white rounded border border-gray-400  focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        
        <div className="p-2 w-full">
          <div>
            
            <button
              type="submit"
              className="flex justify-center items-center text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none  rounded text-xl font-bold shadow-lg mx-auto"
            >
              Send
            </button>
            <Link
              href="/community"
              className="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </Link>
            
          </div>
        </div>
        </div>
        </form>
        </div>
      )}
      export default addcomment