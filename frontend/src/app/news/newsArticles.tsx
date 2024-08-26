'use client'
import Link from 'next/link'
interface News {
    id: number;
    title: string;
    content: string;
    image: string;
}

async function getData(): Promise<News[]> {
    const res = await fetch('http://127.0.0.1:5000/news/getAllNews',{
        next : {revalidate: 1}
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

const NewsArticles = async () => {
    const news: News[] = await getData();

    return (
      <div className="py-24">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold">
                <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Latest news
              </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
              <div className="flex-shrink max-w-full w-full px-3 pb-5">
                <div className=" hover-img max-h-98 overflow-hidden">
                  <a href="#">
                    <img className="max-w-full w-full mx-auto h-auto" src={news[0].image} alt="Image description"/>
                  </a>
                  <div className=" px-5 pt-8 pb-5 bottom-0 w-full bg-[#058f1a]">
                    <a href="#">
                      <h2 className="text-3xl font-bold capitalize text-white mb-3">{news[0].title}</h2>
                    </a>
                    <p className="text-gray-100 hidden sm:inline-block">{news[0].content}</p>                                                  
                    <div className="pt-2">
                      <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Admin</div>
                    </div>
                  </div>
                </div>
              </div>

              {news.map((elem)=>{
                return (
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                <div className="flex flex-row sm:block hover-img">
                  <Link href={`/news/onenews?post=${elem.id}`}>
                    <img className="max-w-full h-[200px] w-full mx-auto" src={elem.image} alt="alt title"/>
                  </Link>
                  <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 className="text-lg font-bold leading-tight mb-2">
                      <a href="#">{elem.title.slice(0,50)} ...</a>
                    </h3>
                    <p className="hidden md:block text-gray-600 leading-tight mb-1">{elem.content.slice(0,60)} ...</p>
                    <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                  </div>
                </div>
              </div>
                )
              })}
          
            </div>
          </div>
          <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-first">
            <div className="w-full bg-white">
              <div className="mb-6">
                <div className="p-4 bg-[#058f1a]">
                  <h2 className="text-lg font-bold text-white">Most Popular</h2>
                </div>
                <ul className="post-number">
                  {news.map((elem)=>{
                    return(
                  <li className="border-b border-gray-100 hover:text-[#058f1a]">
                    <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">{elem.title}</a>
                  </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="text-sm py-6 ">
              <div className="w-full text-center">
                <a className="uppercase" href="#">Advertisement</a>
                <a href="#">
                  <img className="mx-auto" src="https://www.tractour.tn/wp-content/uploads/2020/07/153789090_218781476616663_7905022527403514516_n.jpg" alt="advertisement area"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default NewsArticles;
