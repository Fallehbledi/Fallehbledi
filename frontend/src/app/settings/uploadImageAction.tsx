import axios from "axios";
import UploadImage from '../../firebase/UploadImage'
import { redirect } from "next/navigation";
const UpLoadFarmerImage = async (userId:any,formData:FormData) => {
    const imageFile = formData.get('image') as File;
    const ImageUrl = await UploadImage(imageFile)
    const farmerImage = {
        profileImage: ImageUrl
    };
    try {
      await axios.put(`http://127.0.0.1:5000/api/farmer/${userId}`,farmerImage);
      redirect('/')

    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  export default UpLoadFarmerImage