 'use server'
 import {redirect} from 'next/navigation'
import {cookies} from 'next/headers'
import axios from 'axios'

const GetUser = async (formData: FormData) => {
    var succMessage = ''
try {
    const user = Object.fromEntries(formData.entries());
    const getUser = await axios.post('http://127.0.0.1:5000/api/farmer/signin',user)
    if(getUser.data.message==='Login succeeded') {
        succMessage = getUser.data.message;
        cookies().set("Authorization", getUser.data.token,{
            secure:true,
            httpOnly:true,
            path:"/",
            sameSite:'strict'
        })
        redirect('/')
    }
    
} 
catch (error:any) {
    
        return (error.response.data);
    
   
}
        
}
    
export default GetUser
