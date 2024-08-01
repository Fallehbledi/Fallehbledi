import Image from 'next/image';

interface News {
    id: number;
    title: string;
    content: string;
    image: string;
}

async function getData(): Promise<News[]> {
    const res = await fetch('http://127.0.0.1:5000/news/getAllNews',{
        next : {revalidate: 3600}
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

const NewsArticles = async () => {
    const news: News[] = await getData();
    console.log(news)

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {news.map((article) => (
                    <div key={article.id} className="bg-green-100 shadow-lg rounded-lg overflow-hidden">
                        <div className="relative w-full h-48 md:h-64">
                            {/* <Image src={article.image} layout="fill" objectFit="cover" alt={article.title} /> */}
                        </div>
                        <div className="p-5">
                            <h2 className="text-lg md:text-xl font-bold mb-2">{article.title}</h2>
                            <p className="text-sm md:text-base text-gray-700">{article.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsArticles;
