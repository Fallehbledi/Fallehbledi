
async function getData() {
    const res = await fetch('http://127.0.0.1:5000/weather');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  
  export default async function Page() {
    const data = await getData(); 
    const current = data[0];  
    console.log(current);
    
    return (
      <div className='flex flex-col gap-y-3 mb-5 p-4 w-3/5 bg-blue-950 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-40'>
    
     
      </div>
    );
  }