import PricesList from './PricesList'
import PricesTable from './PricesTable'
const page = () => {

  return (
    <div className="">
        
    <section className="">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12  ">
        <h1 className="mb-4 mt-[4rem] text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl ">Stay informed with the most up-to-date <span className='text-[#058f1a]'>Market Prices!</span></h1>
        <p className="mb- text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"> Explore our collection to find the latest pricing on all our products and ensure you're getting the best value.</p>
    </div>
</section>
<div className="">
            <PricesList/>
            <div className="px-4">
            <PricesTable/>
            </div>
        </div>

      </div>
        
  )
}

export default page