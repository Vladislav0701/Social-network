import React from 'react';
import Post from "./Post/Post";
import style from "./MyPost.module.css";


const MyPost = (props) => {
    

    const postsElements = props.postData.map((p) => <Post messages={p.messages} likeCount={p.likeCount} />)

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
                {postsElements}
            </div>
                
        </div>

           

    )
}

export default MyPost;