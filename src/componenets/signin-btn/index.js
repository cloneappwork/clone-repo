import React, {useContext} from 'react';
import "./style.css"
import { UserContext } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth';
import "./style.css";

export default function SignInBtn() {

    //const [user, setuser] = useState(SignInBtn) {
        const[,setUser] = useContext(UserContext).user;

    
        const signInBtnClick = async() => {

            let userBySignIn = await signInWithGoogle();

            if(userBySignIn) setUser(userBySignIn);
        };

    return (
        <div className="signInBtn" onClick={signInBtnClick}>
            
            <p>Sign in with Google</p>
            
        </div>
    );
}

