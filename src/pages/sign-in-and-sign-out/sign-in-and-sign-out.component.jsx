
import './sign-in-and-sign-out.style.scss'
import Signin from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndOutPage =()=>(
    <div className='sign-in-and-sign-up'>
        <Signin/>
        <SignUp/>
    </div>
)

export default SignInAndOutPage