import React from 'react'
import moment from 'moment'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Link from 'next/link'

const page = () => {
  return (
    <section className="bg-white py-28 antialiased ">
  <div className="mx-auto max-w-2xl px-4 2xl:px-0">
    <div className="flex items-center justify-center space-x-2">
        <IoMdCheckmarkCircleOutline className='w-28 h-28  text-[#058f1a] '/>
      <h2 className="text-4xl text-center font-semibold text-[#058f1a] ">Thanks for your order!</h2>
    </div>
      <p className="text-gray-500 text-center py-5 mb-6 md:mb-8">Your order <a href="#" className="font-medium text-[#058f1a]  hover:underline">#55476</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
      
      <div className="flex items-center justify-center space-x-4">
          <Link href="/marketplace" className="py-2.5 px-5 text-sm font-medium text-white  bg-[#058f1a] rounded-lg  ">Return to shopping</Link>
      </div>
  </div>
</section>
  )
}

export default page