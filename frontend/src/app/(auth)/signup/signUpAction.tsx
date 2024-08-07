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
            phone: '54555454',
            location: "tunis",
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