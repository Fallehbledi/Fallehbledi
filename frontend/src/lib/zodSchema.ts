import {z} from 'zod'
const signUpSchema = z.object({
    firstName: z.string().min(4).max(50),
    lastName: z.string().min(4).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(255),
    adress:z.string().min(4).max(255), 
})

export default signUpSchema