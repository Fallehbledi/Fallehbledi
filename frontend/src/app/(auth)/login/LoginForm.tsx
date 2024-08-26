'use client'
import GetUser from './LoginAction'
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import User from '../../../helpers/getUser'
import { redirect } from 'next/navigation';
import verifyUser from '../../../helpers/verifyUser'
const LoginForm =  () => {
const [errors, setErrors] = useState('');
const handleLogin =async (formData:FormData)=>{
    const getUser = await GetUser(formData)
    if(getUser === 'Login succeeded'){
      toast.success('Welcome to Falleh Bledy',{
        duration: 5000,
      })
    }
    else{
      setErrors(getUser);
    }
const user:any = await User()    
if(user && user.isVerified === false){
  redirect('/confirm')
}
else if(user && user.isVerified === true){
  redirect('/')
}
    
}

  return (
    <div className="py-6 space-y-4 md:space-y-6   sm:p-8  md:ml-[34rem]  " >
              <h1 className="text-xl font-bold  text-gray-900  mt-28 ">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action={verifyUser}>
                 {errors &&  <div
    role="alert"
    className="bg-red-100  border-l-4 border-red-500  text-red-900  p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200"
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 flex-shrink-0 mr-2 text-red-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p className="text-xs font-semibold">{errors}</p>
  </div>}
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 " placeholder="name@exemple.com" />
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5  " />
                  </div>
                  <div className="flex items-center justify-center">
                      <a href="#" className="text-sm font-medium text-gray-900 text-center">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-[#058f1a] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                  <p className="text-sm font-medium text-gray-900 text-center">
                      Don’t have an account yet? <a href="#" className="font-medium text-[#058f1a] ">Sign up</a>
                  </p>
              </form>
          </div>
  )
}

export default LoginForm