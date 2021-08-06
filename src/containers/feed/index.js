import React from 'react';
import "./style.css"
import Post from '../post';
import {db} from "../../firebase";

export default function Feed() {
   
   const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot({snapshot} =>
            {
               

            });
    }, [])

    return (
        <div className = "feed">
            
            <Post profileUrl = "https://lh3.googleusercontent.com/a-/AOh14Ghjelj93LXeUr7zGIZBv3J9lggy61x3L9DblYU5qro=s96-c"
            username ="Ankita"
            photoURl = "blob:http://localhost:3000/b64ae8d3-64a0-4ee2-93c6-aefd5df6f297"
            caption="HEY! This is my first post"
            />
       
        </div>
    )
}
