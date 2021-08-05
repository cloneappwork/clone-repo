import React from 'react';
import "./style.css"
import Post from '../post';
;

export default function Feed() {
    return (
        <div className = "feed">
            
            <Post profileUrl = "https://lh3.googleusercontent.com/a-/AOh14Ghjelj93LXeUr7zGIZBv3J9lggy61x3L9DblYU5qro=s96-c"
            username ="Ankita"
            photoURl = "blob:http://localhost:3000/4945772e-9a95-462b-8c54-651b241e7823"
            caption="HEY! This is my first post"
            />
       
        </div>
    )
}
