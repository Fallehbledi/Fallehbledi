'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { revalidatePath } from 'next/cache'
const productsAdded =  () => {
  const [products,setProducts]=useState([])
  const [refetech,setRefetech] = useState(false)
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
console.log(products);


  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/card/farmerCard/${1}`)
    .then((response) =>setProducts(response.data))
    .catch((err) => console.log(err))
  },[!refetech])
    
  const deleteProduct =(idProd)=>{
    axios.delete(`http://127.0.0.1:5000/api/card/${idProd}`)
   .then((response) => setRefetech(!refetech))
   .catch((err) => console.log(err))
  }

  return (
    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div className="space-y-6">
            {/*products card*/}
           
          {products.map((elem)=>{
            console.log(elem);
            
            return (
<div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
              <div className="space-y-4 md:flex md:items-center  md:gap-6 md:space-y-0">
                <a href="#" className="shrink-0 md:order-1">
                  <img className="h-20 w-20 " src={elem.image} alt="imac image" />
                </a>
  

                <div className="w-full min-w-0 flex   space-x-20 ">
                  <div className="flex flex-col space-y-5">
                  <a href="#" className="text-xl font-semibold text-gray-900 hover:underline ">{elem.name}</a>
  
                  <div className="flex items-center gap-4">
                    
  
                    <button onClick={()=>{deleteProduct(elem.id)}} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                      <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                      </svg>
                      Remove
                    </button>
                  </div>
                  </div>
                  <div className="flex space-x-20">
                    <span className='text-xl font-semibold text-gray-900'>Price</span>
                    <span className='text-xl font-semibold text-gray-900'>{elem.price} TND</span>

                  </div>
                </div>
                
              </div>
            </div>
          
            )
          })}
           
            
          
          </div>
          
        </div>
  )
}

export default productsAdded