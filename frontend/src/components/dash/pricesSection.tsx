import Prices from '../../data/prices.json'
import Link from 'next/link'
const pricesSection = () => {
    const {prices}=Prices 
    const  pricesSection = prices.splice(0,4)   
  return (
    

<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 ">Latest Market Prices</h5>
        <Link href="/marketprices" className="text-sm font-medium text-[#058f1a]">
            View all
        </Link>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
            {pricesSection.map((elem)=>{
return (
    <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={elem.image} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-[14px] font-medium text-gray-900 ">
                            {elem.title}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-[14px]font-semibold text-gray-900 ">
                        {elem.price}
                    </div>
                </div>
            </li>
)
            })}
            
        </ul>
   </div>
</div>

    )

}

export default pricesSection