import React from 'react';

import Post from "./Post/Post";

import style from "./MyPost.module.css";


const MyPost = (props) => {
    let postsElements = props.postData.map((p) => <Post messages={p.messages} likeCount={p.likeCount} />);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.wrapper}>
            <h3>
                My post
            </h3>
            <div className={style.news}>
                <textarea 
                    onChange={onPostChange} 
                    ref={newPostElement} 
                    placeholder="Your news..."
                    value={props.newPostText} />
                <button onClick={addPost}>Send</button>
            </div>
            <div>
                {postsElements}
            </div>
                
        </div>

           

    )
}

export default MyPost;