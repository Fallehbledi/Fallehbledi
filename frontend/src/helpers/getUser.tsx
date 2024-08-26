'use server'
import { cookies } from "next/headers";
import { jwtDecode } from 'jwt-decode';
const getUser = async()=>{
    const GetUser = cookies().get("ActiveUser")  
    console.log(GetUser, "GetUser");
    
    if (GetUser) {
      const decodedToken = jwtDecode(GetUser.value)
      console.log(decodedToken, "decoded token");
      
      return decodedToken
    }
    
  }
  export default getUser