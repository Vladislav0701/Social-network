import React from 'react';
import Post from "./post/post";
import style from "./myPost.module.css";


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
                <Post messages="Hello how are you" />
                <Post messages="Hi! How was your day" />
            </div>
                
        </div>

           

    )
}

export default MyPost;