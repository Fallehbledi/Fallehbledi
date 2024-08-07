'use server'

import { cookies } from "next/headers";
import { jwtDecode } from 'jwt-decode';
const getUser = async()=>{
    const GetUser = cookies().get("Authorization")  
    if (GetUser) {
      const decodedToken = jwtDecode(GetUser.value)
      return decodedToken
    }
    
  }
  export default getUser