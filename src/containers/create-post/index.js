import React from 'react'
import "./style.css";
import { SignInBtn } from '../../componenets'

export default function CreatePost() {
    return (
        <div className = "createPost">
            <SignInBtn/>
            <p style ={{marginLeft : "12px"}}> To post and Comment</p>
        </div>
    )
}
