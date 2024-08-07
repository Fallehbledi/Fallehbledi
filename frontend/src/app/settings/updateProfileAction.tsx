import axios from "axios";
import {redirect} from 'next/navigation'
const UpLoadFarmerProfile = async (userId:any,formData:FormData) => {
    'use server'
    const farmerProfile = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    adress: formData.get('adress'),
    location: formData.get('location'),
    };
    try {
      await axios.put(`http://127.0.0.1:5000/api/farmer/${userId}`,farmerProfile);
      redirect('/')
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  export default UpLoadFarmerProfile