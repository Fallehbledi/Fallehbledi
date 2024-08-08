import Prices from '../../data/prices.json'
import MarketPricesChart from './maPricesChartUi'
const page = () => {
    const {prices}=Prices    

  return (
    <div className="overflow-x-auto  sm:rounded-lg py-24 p-8">
    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product
                </th>
                <th scope="col" className="px-6 py-3">
                    MinPrice
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    MaxPrice
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Add to favorites
                </th>
            </tr>
        </thead>
        {prices.map((elem)=>{
            return (
<tbody>
            <tr className="bg-white border-b ">
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                    <img className="w-10 h-10 rounded-full" src={elem.image} alt="image prod"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">{elem.title}</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    {elem.minPrice}
                </td>
                <td className="px-6 py-4">
                    {elem.price}
                </td>
                <td className="px-6 py-4">
                    {elem.maxPrice}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> {elem.status}
                    </div>
                </td>
                <td className="px-6 py-4">
                    {/* Modal toggle */}
                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-[#058f1a] hover:underline">Add</a>
                </td>
            </tr>
        </tbody>
            
            )
        })}
        
    </table>
    <MarketPricesChart prices={prices}/>
</div>

  )
}

export default page