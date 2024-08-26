'use server'

import axios from 'axios'
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import profileActivation from './profileActivation'

const getUser = async(formData:FormData)=>{
    const user = Object.fromEntries(formData.entries());
    const GetUser = await axios.post('http://127.0.0.1:5000/api/farmer/signin',user)  
    console.log(GetUser.data, "GetUser");
    if(GetUser.data.loggedUser.isVerified === true){
        cookies().set("ActiveUser", GetUser.data.token,{
            secure:true,
            httpOnly:true,
            path:"/",
            sameSite:'strict'
        })
        redirect('/')
        
    }
    else if(GetUser.data.loggedUser.isVerified === false){
        redirect(`/confirm?user=${GetUser.data.token}`)


    }
    
 return GetUser   
}
export default getUser