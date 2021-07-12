import React,{ useContext,useState } from 'react'
import "./style.css";
import { SignInBtn } from '../../componenets'
import { UserContext} from '../../contexts/user';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import makeId from '../../helper/functions';
import { storage } from '../../firebase';

export default function CreatePost() {
    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState("");

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);

            var selectedImageSrc=URL.createObjectURL(e.target.files[0]);
        
            var imagePreview =  document.getElementById("image-preview");

            imagePreview.src=selectedImageSrc;
            imagePreview.style.display="block";
        }

    };

    const handleUpload =() => {
        if(image){
            var imageName = makeId(10);
            const uploadTask=storage.ref(`images/${imageName}.jpg`).put(image);

            uploadTask.on("state_changed",(snapshot) =>{
                // progress function

                const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
            })
        }
    }; //handle upload check image exist

    return (
        <div className = "createPost">
           
        {user ? (
            <div className ="createPost__loggedIn">
            <p> Create Post </p>
            <div className ="createPost__loggedInCenter">
                <textarea className ="createPost__textarea"
                rows ="3"
                placeholder="Enter Caption Here"
                value ={caption}
                onChange = {(e) => setCaption(e.target.value)}    >            
                </textarea>

                <div className="createPost__imagePreview">
                  <img id="image-preview" alt="" />
                </div>
            </div>
           
            <div className="createPost__loggedInBottom">
            <div class ="createPost__imageUpload">
            <label htmlFor ="fileInput"><AddAPhotoIcon style = {{cursor:"pointer",fontSize :"20px"}}/>
            </label>
            <input id ="fileInput" 
            type ="file"
             accept ="image/*"
              onChange ={handleChange}/>
            </div>
            <button className = "createPost__uploadBtn" 
            onclick ={handleUpload} 
            style = {{color : caption ? "#000" : "lightgrey"}}>
                Upload
                </button>
            </div>
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
