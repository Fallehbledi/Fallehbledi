'use client'
import CreateUser from './signUpAction'
import {toast} from 'react-hot-toast'
import {redirect} from 'next/navigation'
import { useState } from 'react'
const signupForm = () => {
 const [errorMessage,setErrorsMessage]=useState([])
 const HandleSignUp = async(formData:FormData)=>{
     const result = await CreateUser(formData)
     
     if (result === 'User registered successfully') {
     toast.success(result,{
      duration: 5000,
    })
      redirect('/login')
     }
     else {
      setErrorsMessage(result)
     }
        
    }
      return (
        <form action={HandleSignUp.bind(null)} className="max-w-sm mx-auto mt-28 flex flex-col ">
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-5">
          <label className="block mb-2  text-sm font-medium text-gray-900 ">
          First Name
          </label>
          <input
            type="text"
            id="firstname"
            name='firstName'
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="First Name"
          />
          {errorMessage.map((error)=>{
            if(error.path==='firstName'){
              return (
                <div className="text-red-500 text-sm" key={error.message}>
                  {error.msg}
                </div>
              )
            }
          })}
        </div>

        <div className="mb-5">
          <label className="block mb-2  text-sm font-medium text-gray-900 ">
          Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name='lastName'
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="Last Name"
          />
          {errorMessage.map((error)=>{
            if(error.path==='lastName'){
              return (
                <div className="text-red-500 text-sm" key={error.message}>
                  {error.msg}
                </div>
              )
            }
          })}
        </div>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Email
          </label>
          <input
            type="email"
            id="email"
            name='email'
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="name@exemple.com"
          />
          {errorMessage.map((error)=>{
            if(error.path==='email'){
              return (
                <div className="text-red-500 text-sm" key={error.message}>
                  {error.msg}
                </div>
              )
            }
          })}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
           Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
          />
          {errorMessage.map((error)=>{
            if(error.path==='password'){
              return (
                <div className="text-red-500 text-sm" key={error.message}>
                  {error.msg}
                </div>
              )
            }
          })}
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
          />
          {errorMessage.map((error)=>{
            if(error.path==='password'){
              return (
                <div className="text-red-500 text-sm" key={error.message}>
                  {error.msg}
                </div>
              )
            }
          })}
        </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Location
          </label>
          <input
            type="text"
            id="text"
            name='location'
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="location"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Adress
           </label>
          <input
            type="text"
            id="text"
            name='adress'
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="Adress"
          />
        </div>
        </div>
        <button
          type="submit"
          className="text-white  bg-[#058f1a]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Create Account
        </button>
      </form>
  )
}

export default signupForm