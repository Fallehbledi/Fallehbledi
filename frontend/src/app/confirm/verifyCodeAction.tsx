'use server'
import getUser from '../../helpers/getUser'
import UpdateStatus from './profileUpdateStatus'

const verifyCodeAction = async (formData:FormData,user:any) => {
    'use server'
  const VerificationCode = formData.get('activationCode')
  if(VerificationCode === ''){
    return 'Please enter your activation code'
  }
  else if (user.activationCode === VerificationCode){
    UpdateStatus(user.userId)
    return 'email verified successfully'
  }
  else{
    return 'Please enter a valid activation code'
  }
}

export default verifyCodeAction