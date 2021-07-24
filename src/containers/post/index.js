import React, { useContext, useState } from 'react'
import {UserContext} from "../../contexts/user";
export default function Post() {
   
   const [user, setUser] = useContext(UserContext).user 
    return (
        <div className = "post">
            <div>
                <img src ={user.photoURL}/>
            </div>
        </div>
    );
}
