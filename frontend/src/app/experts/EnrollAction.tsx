'use server'
import axios from 'axios'

const EnrollAction = (formData:FormData) => {
  'use server'
  const enrollement = {
    farmerId:1,
    expertId:1,
    message:formData.get('message'),
  }
  try {
    const addEnrollement = axios.post('https://76e6-165-51-57-26.ngrok-free.app/enrollement/create',enrollement)
    console.log(addEnrollement);
    
  } catch (error) {
    console.log(error);
    
  }
}

export default EnrollAction