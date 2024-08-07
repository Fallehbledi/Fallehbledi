import ProfileImage from "./ProfileImage"
import GeneralInformation from "./GeneralInformation"
const page = () => {
  return (
    <div className="flex items-start space-x-5 justify-center py-24 p-8  ">
        <div className="">
         <ProfileImage/>
        </div>
        <div className="">
            <GeneralInformation/>
        </div>
    </div>
  )
}

export default page