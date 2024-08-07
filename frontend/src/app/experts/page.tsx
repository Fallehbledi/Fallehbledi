import ExpertCard from "./expertCard"
import ChooseExpert from './chooseExpert'

const page = () => {
  return (
    <div className="py-24">
            <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white  rounded-md ">
           <ChooseExpert/>
{/* expert card*/ }
               <ExpertCard/> 
            </div>
        </div>
  )
}

export default page