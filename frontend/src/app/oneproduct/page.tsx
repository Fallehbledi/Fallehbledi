'use client';
import React from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import {toast} from 'react-hot-toast'

const OneProduct = () => {

    const searchParams = useSearchParams();

    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const description = searchParams.get('description');
    const image = searchParams.get('image') ?? '';
    const price = searchParams.get('price');
    const category = searchParams.get('category');
    const quantity = searchParams.get('quantity');
    const productAdded={
        name:name,
        description:description,
        image:image,
        price:Number(price),
        category:category,
        quantity:Number(quantity),
        farmerId:1
    }
const handleAddProd=()=>{
axios.post('http://127.0.0.1:5000/api/card/addedProd',productAdded)
.then((response)=>toast.success('Product Added Succefully',{
    duration: 5000,
  }))
.catch((err)=>console.log(err))

}

    return (

        <section className=" ">
        <div className="w-full mx-auto  px-4 sm:px-6 lg:px-0 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2  ">
                <div className="img">
                    <div className="img-box h-full max-lg:mx-auto ">
                        <img src={image}  alt="Yellow Tropical Printed Shirt image"
                            className="max-lg:mx-auto lg:ml-auto w-[500px] mt-[10rem] mr-9"/>
                    </div>
                </div>
                <div
                    className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                    <div className="data w-full max-w-xl">
                        <p className="mt-[6rem] text-lg font-medium leading-8 text-[#058f1a] mb-4">Category  /&nbsp;{category }
                        </p>
                        <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">{name}</h2>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                            <h6
                                className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                               {price} TND</h6>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_8480_66029)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#F3F4F6" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_8480_66029">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <span className="pl-2 font-manrope font-semibold text-xl leading-9 text-gray-900 "> Quantity : {quantity}</span>
                            </div>

                        </div>
                        <p className="text-gray-800 text-base font-normal mb-5">
                          {description}
                        </p>
                        <ul className="grid gap-y-4 mb-8">
                            
                            <li className="flex items-center gap-3 ">
                                <svg className='text-[#000]' width="26" height="26" viewBox="0 0 26 26" fill="green" 
                                    xmlns="http://www.w3.org/2000/svg" >
                                    <rect width="26" height="26" rx="13" fill="green"  />
                                    <path
                                        d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                        stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                                <span className="font-normal text-base text-gray-900 ">Free delivery</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="green"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="green" />
                                    <path
                                        d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                        stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                                <span className="font-normal text-base text-gray-900 ">High quality and effective </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="green"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="green" />
                                    <path
                                        d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                        stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                                <span className="font-normal text-base text-gray-900 ">All product is available</span>
                            </li>
                        </ul>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                            <div className="flex sm:items-center sm:justify-center w-full">
                                <button
                                    className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                    <svg className="stroke-gray-900 group-hover:stroke-black" width="22" height="22"
                                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                            stroke-linecap="round" />
                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                            stroke-linecap="round" />
                                    </svg>
                                </button>
                                <input type="text"
                                    className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                                    placeholder="1" />
                                <button
                                    className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                    <svg className="stroke-gray-900 group-hover:stroke-black" width="22" height="22"
                                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="#9CA3AF" stroke-width="1.6"
                                            stroke-linecap="round" />
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" stroke-opacity="0.2"
                                            stroke-width="1.6" stroke-linecap="round" />
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" stroke-opacity="0.2"
                                            stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                            <button
                             onClick={handleAddProd}
                                className="group py-4 px-5 rounded-full bg-[#058f1a] text-white font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-green-700">
                              Add to cart
                              </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default OneProduct