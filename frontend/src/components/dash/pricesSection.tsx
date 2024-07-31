import Prices from '../../data/prices.json'
import Image from 'next/image'
const pricesSection = () => {
    const { prices } = Prices
  return (
    <div className='flex flex-wrap  justify-center space-x-8' >
{prices.map((elem)=>{
    return(
        <div className="flex items-center space-x-6 p-1.5">
   <Image src={elem.image} width={40} height={40} alt=''></Image>
         <div className="">
            <h5>{elem.title}</h5>
             <h5>{elem.price}</h5>
         </div>
        </div>
    )
})}
    </div>
  )
}

export default pricesSection