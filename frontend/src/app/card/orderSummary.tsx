'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'
const orderSummary = () => {
    const [products,setProducts]=useState([])
    const [refetech,setRefetech] = useState(false)
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/card/farmerCard/${1}`)
        .then((response) =>setProducts(response.data))
        .catch((err) => console.log(err))
      },[!refetech])
 const calculateTotalPrice = () => {
        let totalPrice = 0
        products.forEach((product) => totalPrice += product.price )
      return  totalPrice 
    
}

      
  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
      <p className="text-xl font-semibold text-gray-900 ">Order summary</p>

      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
            <dd className="text-base font-medium text-gray-900 ">{calculateTotalPrice()} TND</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
            <dd className="text-base font-medium text-green-600">0 TND</dd>
          </dl>


          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
            <dd className="text-base font-medium text-gray-900 ">19 %</dd>
          </dl>
        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt className="text-base font-bold text-gray-900 ">Total</dt>
          <dd className="text-base font-bold text-gray-900 ">{calculateTotalPrice()} TND</dd>
        </dl>
      </div>

      <Link href="/card/checkout" className="flex w-full items-center justify-center rounded-lg bg-[#058f1a] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800  ">Proceed to Checkout</Link>

      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
        <Link href="/marketplace" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
          Continue Shopping
          <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default orderSummary