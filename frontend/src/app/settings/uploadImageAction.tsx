'use server'
import axios from "axios";
import UploadImage from '../../firebase/UploadImage'
import { revalidatePath } from "next/cache";
const UpLoadFarmerImage = async (userId:any,formData:FormData) => {
  'use server'
    const imageFile = formData.get('image') as File;
    const ImageUrl = await UploadImage(imageFile)
    const farmerImage = {
        profileImage: ImageUrl
    };
    try {
   const response=   await axios.put(`http://127.0.0.1:5000/api/farmer/${userId}`,farmerImage);
   if(response.status=== 200){

      revalidatePath(`/settings?${userId}`)
    }
      
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  export default UpLoadFarmerImage