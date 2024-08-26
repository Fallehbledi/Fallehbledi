'use client'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
interface News {
    id: number;
    title: string;
    content: string;
    image: string;
}

const page = () => {
const [news,setNews]= useState([])
const [oneNews,setOneNews]= useState('')
const searchParams = useSearchParams();
const oneNew = searchParams.get('post');

useEffect(()=>{
 axios('http://127.0.0.1:5000/news/getAllNews')
 .then((res)=>{setNews(res.data)})
 .catch((err)=>console.log(err))
  
},[])
const oneNewsFiltred= news.filter((elem)=>{
  return elem.id === Number(oneNew)
  })

 


  return (
    <div className='flex '>
    {oneNewsFiltred.map((elem)=>{
      return (
<div className='py-32 px-20 flex flex-col items-start   '>
              <h1 className="mb-4  text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">{elem.title}</h1>
        <address className="flex items-center justify-start mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                      <img className="mr-4 w-8 h-8 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/fallehbledy.appspot.com/o/images%2FScreenshot_2024-08-10_094155-removebg-preview.png?alt=media&token=12c9fce9-988d-4b2c-9ab9-29fc58520fd2" alt="Jese Leos"/>
                      <div>
                          <a href="#" rel="author" className="text-sm font-bold text-gray-900 ">Admin</a>
                          <p className="text-[12px] text-gray-500 ">Source: Tunisia Agricultute News</p>
                       </div>
                  </div>
              </address>
              <img src={elem.image} className='w-[680px]'></img>
              <p className="py-4 w-[40rem]">{elem.content}</p>
    </div>
      )
    }) }
    <div className=" max-w-full w-[30rem]  py-32">
    <div className="w-full bg-white">
      <div className="mb-6">
        <div className="p-4 bg-[#058f1a]">
          <h2 className="text-lg font-bold text-white">Read More</h2>
        </div>
        <ul className="post-number">
         
          
        </ul>
      </div>
    </div>

    <div className="text-sm mr-10 ">
      <div className="w-full text-center">
        <a className="uppercase" href="#">Advertisement</a>
        <a href="#">
          <img className="mx-auto" src="https://www.tractour.tn/wp-content/uploads/2020/07/153789090_218781476616663_7905022527403514516_n.jpg" alt="advertisement area"/>
        </a>
      </div>
    </div>
  </div>
  </div>
  )
}

export default page