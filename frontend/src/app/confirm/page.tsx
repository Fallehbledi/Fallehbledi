'use client'
import { useState } from 'react'
import {toast} from 'react-hot-toast'
import verifyCodeAction from './verifyCodeAction'
import { redirect } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { jwtDecode } from 'jwt-decode';
import userConfirmed from '@/helpers/userConfirmed'

const page =  () => {
    const searchParams = useSearchParams();
    const token:any = searchParams.get('user')
   const user = jwtDecode(token)
   console.log(user,'activation code');
   
    
     const activationCodeHandling = async (formData:FormData)=>{
        const result = await verifyCodeAction(formData,user)
        if(result === 'Please enter your activation code'){
            toast.error(result) 
        }
        else if (result === 'Please enter a valid activation code'){
            console.log(result);
            
            toast.error(result)
        }
        else{
            toast.success(result)
            userConfirmed(token)
            redirect('/login')
           
        }
        
     }
    
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex justify-center">

                <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold mb-1">Enter Your Verification Code</h1>
                        <p className="text-[15px] text-slate-500">Enter the 6-digit verification code that was sent to your email.</p>
                    </header>
                            <form action={activationCodeHandling}>
                        <div className="flex items-center justify-center gap-3">

                        <input
                        name='activationCode'
                        type="text"
                        className="w-44 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        />
                        </div>
                        <div className="max-w-[260px] mx-auto mt-6">
                            <button 
                                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#058f1a] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm    transition-colors duration-150">Verify
                                Account</button>
                        </div>
                      </form>
                </div>
                </div>
                </div>
  )
  
}

export default page