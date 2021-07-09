import React,{ useContext,useState } from 'react'
import "./style.css";
import { SignInBtn } from '../../componenets'
import { UserContext} from '../../contexts/user';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function CreatePost() {
    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState("");


    const handleChange = () => {

    }

    return (
        <div className = "createPost">
           
        {user ? (
            <div className ="createPost__loggedIn">
            <p> Create Post </p>
            <div className ="createPost__loggedInCenter">
                <textarea className ="createPost__textarea"
                rows ="3"
                value ={caption}
                onChange = {(e) => setCaption(e.target.value)}    >            
                </textarea>
            </div>
            <div class ="createPost__imageUpload">
            <label htmlFor ="FileInput"><AddAPhotoIcon style = {{cursor:"pointer",fontSize :"20px"}}/>
            </label>
            <input id ="fileInput" 
            type ="file"
             accept ="image/*"
              onChange ={handleChange}/>
            </div>
            <button className = "createPost__uploadBtn">Upload</button>
            </div>
            ) : (
                <div> 
                    <SignInBtn/>
                        <p style ={{marginLeft : "12px"}}> To post and Comment</p>
                </div> 
            )}

           
        </div>
    );
}
