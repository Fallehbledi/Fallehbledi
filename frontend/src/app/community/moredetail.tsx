
import Image from "next/image"
import logo from "../../../public/image/Farmer-amico.png"
const moredetail = () => {
  return (
    <div className="">
        <div className="bg-white shadow-md rounded-md max-w-xl mx-auto mt-5">
          <div className="p-4 flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="ml-3">
              <div className="text-sm font-medium text-black">
                Luke Stoney {' '}
              </div>
            </div>
          </div>
          <div className="px-4 pb-4 text-black text-base">
            Paparazzi can't keep their cameras off me and Tom 
          </div>
          <div className="relative">
            <img
              src="https://placehold.co/600x400"
              alt="Two people looking surprised at an Olympic performance on TV. One is wearing a blue tank top and the other a white shirt."
              className="w-full"
            />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 w-full p-4 text-center">
              <div className="text-sm font-bold text-blue-600 leading-tight">
                Tom Kroos and his best pal stunned at Simone Biles Olympic
                Performance
              </div>
              <div className="text-xs text-gray-700">
                USA women's gymnastics team advanced to the team final on
                Tuesday
              </div>
              <div className="text-xs text-gray-500">
                Published on July 20, 2021 12:07 PM EDT
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 border-t border-gray-200 text-xs text-gray-700">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <i className="far fa-comment-alt"></i>
                <span> Comments</span>
              </div>
            </div>
          </div>
        </div>
      
    
    </div>
  )
}

export default moredetail
