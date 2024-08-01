import moment from "moment";
import PricesMenu from "./PricesFilterMenu"
const PricesSection = () => {
  return (
    <div className="px-8">
      <h5 className="text-2xl font-semibold">
        Market Prices for <span className="text-[#058f1a]">{moment().format("MMMM Do YYYY")}</span>
      </h5>
      <div className="py-4 flex space-x-2 mt-2 md:space-x-72">
        {/*action button*/}
        <select
          className="inline-flex outline-none items-center text-gray-500 bg-white border  border-gray-300  hover:bg-gray-100  font-medium rounded-lg text-sm px-3  "

        >
         <option value='All' >All</option> 
         <option value='All' className="block px-4 py-2 hover:bg-gray-100">Favorit</option> 
         <option value='All' className="block px-4 py-2 hover:bg-gray-100">Vegetables</option> 
         <option value='All' className="block px-4 py-2 hover:bg-gray-100">Fruits</option> 
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </select>      
        {/*search items*/}
        <div className="search ">
          <div className="inline-flex items-center text-gray-500 bg-white border  border-gray-300  hover:bg-gray-100  font-medium rounded-lg text-sm px-3 py-1.5">
          <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <input className="ml-3 outline-none p-1 hover:bg-gray-100" type="search" placeholder="Search for product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesSection;
