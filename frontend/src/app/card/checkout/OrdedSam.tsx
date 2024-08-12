'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CheckoutPage from './checkout'
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
const amount = calculateTotalPrice();

      
  return (
    <div className="flex items-center gap-10 max-w-5xl ml-24  justify-center ">
    <div className="mx-auto flex-1 ">
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
    </div>
  </div>
   <CheckoutPage amount={amount}/> 
  </div>
  )
}

export default orderSummary