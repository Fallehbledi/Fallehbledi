import { ref, getDownloadURL,uploadBytes } from "firebase/storage";
import {storage} from '../../../firebaseConfig'
 const imageuploading =async (formatData:FormData)=>{
     'use server'
    const file =  formatData.get('image') as File | null
    console.log(file);
    if (file === null) {
        console.error("No file selected");
        return;
      }
      else{
        
        const storageRef = ref(storage, `images/${file.name}`); // Create a reference to the file in Firebase Storage
        await uploadBytes(storageRef, file); // Upload the file to Firebase Storage

        const url = await getDownloadURL(storageRef); // Get the download URL of the uploaded file
        console.log(url);
        
      }
    

 }

const page = () => {
  return (
    <div>
    <form action={imageuploading}>
      <h1 className="py-20">upload image </h1>
      <input name="image" type="file" placeholder="image here" />
      <button type="submit" >upload</button>
      </form>
    </div>
  )
}

export default page