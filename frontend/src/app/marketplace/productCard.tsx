'use client'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import getData from "./marketPlaceAction"
import Link from 'next/link'

const productCard = async () => {
  const data = await getData()
  console.log(data);
  
  return (
    <section className=" py-8 antialiased  md:py-2">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 ">
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {/*product card*/ }
      {data.map((elem: {
        id: any;
        description: any;
        category: any;
        quantity: any;
        image: any;
        price: ReactNode; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; 
})=>{
       return (
      <Link href={`oneproduct?id=${elem.id}&name=${elem.name}&description=${elem.description}&image=${elem.image}&price=${elem.price}&category=${elem.category}&quantity=${elem.quantity}`}>
       <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">

        <div className="h-56 w-full">
            <img className="mx-auto hidden h-full dark:block" src={elem.image}  alt="" />
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-white bg-[#058f1a] "> Up to 35% off </span>
          </div>
            {/* Product Title*/}
          <span className="text-lg font-semibold leading-tight text-gray-900 hover:underline">{elem.name}</span>
         {/* Product rating*/}
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-[18px] font-extrabold leading-tight text-[#058f1a]">{elem.price} TND</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-[#058f1a] px-5 py-2.5 text-sm font-medium text-white  ">
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
        </Link>
      )
      })}
      
    </div>

  </div>
</section>
  )
}

export default productCard