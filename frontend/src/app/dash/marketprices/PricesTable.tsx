import Image from 'next/image'
import Tomate from '../../../../public/image/tomate.png'
const PricesTable = () => {
  return (
    <div>
        <table className="w-[40rem]  text-sm text-left rtl:text-right text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product
                </th>
                <th scope="col" className="px-6 py-3">
                    Min Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Max Price
                </th>
            </tr>
        </thead>
        <tbody>
        <tr className="bg-white border-b  hover:bg-gray-50 ">
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                    <Image className="w-10 h-10 rounded-full" src={Tomate} alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-[14px] font-semibold">Neil Sims</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    200
                </td>
                <td className="px-6 py-4">
                    600
                </td>
                <td className="px-6 py-4">
                    800
                </td>
        </tr>
        <tr className="bg-white border-b  hover:bg-gray-50 ">
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                    <Image className="w-10 h-10 rounded-full" src={Tomate} alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-[14px] font-semibold">Neil Sims</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    200
                </td>
                <td className="px-6 py-4">
                    600
                </td>
                <td className="px-6 py-4">
                    800
                </td>
        </tr>

        </tbody>
      </table>
    </div>
  )
}

export default PricesTable