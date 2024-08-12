'use server'
import axios from 'axios'

const createUser = async (formData: FormData) => {
    'use server'
    var responseMsg = ''
    try {
        const user = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            password: formData.get("password"),
            adress: formData.get("adress"),
            phone: '22333444',
            location: formData.get("location"),
            profileImage:'https://firebasestorage.googleapis.com/v0/b/fallehbledy.appspot.com/o/images%2FScreenshot_2024-08-10_094155-removebg-preview.png?alt=media&token=12c9fce9-988d-4b2c-9ab9-29fc58520fd2'
        };
        
        const response = await axios.post("http://127.0.0.1:5000/api/farmer/signup",user);
        if(response.data.message === 'User registered successfully'){
            responseMsg = response.data.message;
            return  responseMsg

        }  
        
        
      } 
      catch (error:unknown) {
        return error.response.data.errors
        
      }
      if (responseMsg==='User registered successfully'){
        
      }
      
    };
    export default createUser;