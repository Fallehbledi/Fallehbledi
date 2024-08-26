import Link from 'next/link'
async function getData() {
    const url = 'http://127.0.0.1:5000/api/tools/all';
    const res = await fetch(url, { next: { revalidate: 1 } });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
const LastestNews = async () => {
const products =await getData()
const ProductsSection= products
    return (
      
  
  <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
      <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 ">Latest Products</h5>
          <Link href="/marketplace" className="text-sm font-medium text-[#058f1a]">
              View all
          </Link>
     </div>
     <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            {ProductsSection.map((elem:any)=>{
                return (
<li className="py-3 sm:py-4">
                  <div className="flex items-center">
                      <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src={elem.image} alt="Neil image"/>
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                          <p className="text-[18px] font-medium text-gray-900 ">
                              {elem.name}
                          </p>
                          
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                          {elem.price} TND
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
  
  export default LastestNews