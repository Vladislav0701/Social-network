import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img className={style.avatar} src='' alt="avatar" />
            <div className={style.descr}>{props.messages}</div>
            <img className={style.like} src="https://pngimg.com/uploads/like/like_PNG49.png" alt="" />
            <span className={style.like}>{props.likeCount}</span>
        </div>
    )
}

export default Post;