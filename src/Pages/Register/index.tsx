import SignUp from "../../Components/SignUp";
import { Toaster } from 'react-hot-toast';
import './style.css'
import ImageRegister from '../../images/register.gif'


export default function Register(){

    return(
        <div className="container">
            <Toaster />
            <div className="container-login">
                <SignUp />

            </div>

            <div className="container-image-login">
                <img src={ImageRegister} alt="image register" />
            </div>
        </div>
    )
}