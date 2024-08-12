'use client'
import { useState } from "react"
import EnrollAction from "./EnrollAction"

const chooseExpert = () => {
    const [active,setActive] = useState(false)
  return (
    <div className="">
    <h1 className="text-gray-800 text-3xl font-extrabold">Enrolle With An Expert </h1>
    <button onClick={()=>setActive(!active)} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center mt-5 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
<span className="sr-only">Action button</span>
Choose Expert 
<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
{/*<!-- Dropdown menu -->*/}
<div onClick={()=>setActive(!active)} id="dropdown" className={active? "z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ":"z-10 mt-2 bg-white divide-y hidden divide-gray-100 rounded-lg shadow w-44 "}>
    <ul  className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Sign out</a>
      </li>
    </ul>
</div>
<form action={EnrollAction}>
<div className="sm:col-span-2 py-10">
              <label htmlFor="message" className="block mb-2 text-base font-medium text-gray-900 ">Your message</label>
              <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300  " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="bg-[#000] text-white">Enrolle</button>
          </form>
</div>
  )
}

export default chooseExpert