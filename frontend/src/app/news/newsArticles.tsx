import Image from 'next/image';

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
        <div className="bg-white py-24">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Left */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-[#058f1a] mr-2"></span>FallehBledy News
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                {news.map((elem)=>{
                    return (
<div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <img className="max-w-full w-full mx-auto" src={elem.image} alt="alt title" />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">{elem.title}</a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">{elem.content}</p>
                      <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-[#058f1a] mr-2"></span>Admin</a>
                    </div>
                  </div>
                </div>
                    )
                })}
                
    
              </div>
            </div>
            {/* Right */}
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div className="w-full bg-gray-50 h-full">
                <div className="text-sm py-6 ">
                  <div className="w-full text-center">
                    <a className="uppercase" href="#">Advertisement</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewsArticles;
