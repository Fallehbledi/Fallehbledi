'use server'
import { redirect } from 'next/navigation'

const createcomment = async (PostId: any , UserId: any,formData: FormData) => {
    'use server'
    try {
      const comments = {
        comment: formData.get("comment"),
        postId:PostId,
        farmerId:UserId,
      };
      const response = await fetch("http://127.0.0.1:5000/api/comment/add",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(comments)
    });
    if(response.ok){
      redirect('/community')
  }
 
    

    } 
    catch (error) {
        console.log(error);  
    }
    
  }
  export default createcomment;