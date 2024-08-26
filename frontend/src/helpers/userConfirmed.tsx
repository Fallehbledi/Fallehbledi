'use server'
import { cookies } from 'next/headers';

const userConfirmed = (token:string) => {
    cookies().set("ActiveUser", token,{
        secure:true,
        httpOnly:true,
        path:"/",
        sameSite:'strict'
    })
}

export default userConfirmed