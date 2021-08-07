import React, { useContext, useState } from 'react'
import "./style.css";
import { Comment } from "../../componenets";
import { db, storage } from '../../firebase';
import commentinput from '../../componenets/comments/comment-input';
import CommentInput from '../../componenets/comments/comment-input';


export default function Post({profileUrl,username,id,photoURl,caption,comments})
 {

        const deletePost =() => {

            //delete the image from the firebase storage

            // get reference to the image image file we like to delete 

            var imageRef =storage.refFromURL(photoURl);

            //delete the file
            imageRef
            .delete().
            then(function() {

                console.log("Delete successful");
            })
            .catch(function(error){
                console.log(`Error ${error}`)
            });
            //2 delete the post info from firebase firestore

            db.collection ("posts").doc(id).delete()
            
            .then(function() {

                console.log("Delete post info successful");
            })
            .catch(function(error){
                console.log(`Error post info delete  ${error}`)
            });

        };


   
    return (
        <div className = "post">
            <div className ="post__header">
                <div className ="post__headerLeft" >
                <img className ="post__profilePic "src ={profileUrl}/>
                <p style ={{marginLeft :"8px"}}> {username}</p>
                </div>
                <button onClick ={deletePost}
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

        {comments ? (comments.map((comment) =>(
            < comment username ={comment.username} 
            caption ={comment.comment} />
            ))
        ) : (
        <></> )}

<CommentInput comments = {comments} id ={id}   />


        </div>
    );
        
}
