 'use server'
import { revalidatePath } from "next/cache";
import UploadImage from '../../firebase/UploadImage'
const createpost = async (farmerId:number,formData: FormData) => {
    'use server'
    
    const imageFile = formData.get('image') as File;

   const imageUrl = await UploadImage(imageFile)
    
    const post = {
      title: '',
      content: formData.get("content"),
      image:imageFile? imageUrl : '' , 
      farmerId: farmerId
    };
    const response = await fetch("http://127.0.0.1:5000/api/post/addpost", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
    if (response.ok) {
      revalidatePath('/community')
    }
  };
  export default createpost;