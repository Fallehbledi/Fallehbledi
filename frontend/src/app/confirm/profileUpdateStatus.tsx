import axios from 'axios'

const profileUpdateStatus = (id:any) => {
axios.put(`http://127.0.0.1:5000/api/farmer/activate/${id}`)
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err))
}
export default profileUpdateStatus