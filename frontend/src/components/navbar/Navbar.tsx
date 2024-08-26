'use client'
import Image from 'next/image'
import Logo from '../../../public/image/falleh.png'
import Link from 'next/link'
import ProfileMenu from './profileMenu'
import getUser from '@/helpers/getUser'
import { useEffect, useState } from 'react'

const Navbar =  () => {
const [user,setUser]=useState({})
const [isActivated,setIsActivated]=useState(false)
console.log({user});

    useEffect(() => {
        const fetchUser = async()=>{
            const GetUser:any = await getUser()
            setUser(GetUser)
           if(GetUser && GetUser.isVerified === true){
            setIsActivated(true)
           }
           else{
            setIsActivated(false)
 
           }
        }
    fetchUser()
    },[]);

  return (
    <header className="fixed w-full">
        <nav className="bg-white border-gray-200 py-2.5">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                <Link href="/" className="flex items-center">
                    <Image src={Logo} className="w-[120px] auto ml-1 sm:w-[134px]" alt="Landwind Logo" />
                </Link>
                <div className="flex items-center lg:order-2">
                
                 {!isActivated &&
                 <>
                 <Link href="/login" className="text-[#000]  font-medium rounded-lg text-sm mr-2 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 hover:text-[#058f1a] ">Login</Link>
                <Link href="/signup" className="text-white bg-[#058f1a] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm  lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0">Signup</Link>
                </>
                }
            {user && isActivated &&
            <div className="">
            <ProfileMenu user={user} />
            </div>}
                
        <button   type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden " >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link href="/" className="block py-2 pl-3 pr-4 text-[16px] text-white bg-[#058f1a] rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">Home</Link>
                        </li>
                        <li>
                            <Link href="/news" className="block py-2 pl-3 pr-4 text-[16px] text-white bg-[#058f1a] rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">News</Link>
                        </li>
                        <li>
                            <Link href="/marketplace" className="block py-2 pl-3 pr-4 text-[16px] text-white bg-[#058f1a] rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a] ">Marketplace</Link>
                        </li>
                        <li>
                            <Link href="/community" className="block py-2 pl-3 pr-4 text-[16px] text-white bg-[#058f1a] rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">Community</Link>
                        </li>
                        {isActivated === true &&
                        <li>
                        <Link href="/marketprices" className="block py-2 pl-3 pr-4 text-[16px] text-white bg-[#058f1a] rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">Market Prices</Link>
                    </li>}
                    {isActivated === true &&
                        <li>
                        <Link href="/weather" className="block py-2 pl-3 pr-4 text-[16px] text-white bg-[#058f1a] rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">Weather</Link>
                    </li>}
                        {isActivated === false &&
                        <li>
                            <Link href="about" className="block py-2 pl-3 pr-4 text-[16px] text-white bg-[#058f1a] rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">About</Link>
                        </li>}
                        {isActivated === false &&
                        <li>
                            <Link href="/contact" className="block py-2 pl-3 pr-4 text-[16px]  text-white bg-[#058f1a] rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">Contact</Link>
                        </li>}
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar