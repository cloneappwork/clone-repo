import React, { useContext, useState } from 'react'
import "./style.css";
export default function Post({profileUrl,username,id,photoURl,caption,comments}) {
   
    return (
        <div className = "post">
            <div className ="post__header">
                <div className ="post__headerLeft" >
                <img className ="post__profilePic "src ={profileUrl}/>
                <p style ={{marginLeft :"8px"}}> {username}</p>
                </div>
                <button
                className ="post__delete">Delete</button>
            </div>

            <div className ="post__center"> 
                <img className ="post__photoUrl" src = {photoURl} />
            </div>
        <div>
            <p>
                <span style={{fontWeight : "500",
                 marginRight:"4px"}} >
                {username}
                </span>
                {caption}
                </p>
        </div>
        {comments ? (
             comments.map((comment) =>(
            < comment username ={comment.username} 
            caption ={comment.comment} />
            ))
        ) : (
        <></> )}
        
        </div>
    );
        
}
