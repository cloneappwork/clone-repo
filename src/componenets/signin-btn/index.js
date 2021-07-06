import React from 'react';
import { signInWithGoogle } from '../../services/auth';
import "./style.css";

export default function SignInBtn() {

    //const [user, setuser] = useState(SignInBtn) {
        //const[user,setuser] =useState( )

    
        const signInBtnClick = async() => {

            let user = await signInWithGoogle();

        };

    return (
        <div className="signInBtn">
            
            <p>Sign in with Google</p>
            
        </div>
    );
}

