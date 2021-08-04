import React, { useContext, useState } from 'react'
import "./style.css";
export default function Post({profileUrl,username,id,photoUrl,caption,comments}) {
   
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
        </div>
    );
}
