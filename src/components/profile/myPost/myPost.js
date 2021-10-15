import React from 'react';
import Post from "./Post/Post";
import style from "./MyPost.module.css";


const MyPost = () => {
    return (
        <div className={style.wrapper}>
            <h3>
                My post
            </h3>
            
            <div className={style.news}>
                <textarea placeholder="Your news..."></textarea>
                <button>Send</button>
            </div>
            <div>
                <Post messages="Hello how are you" likeCount="23" />
                <Post messages="Hi! How was your day" likeCount="79" />
            </div>
                
        </div>

           

    )
}

export default MyPost;