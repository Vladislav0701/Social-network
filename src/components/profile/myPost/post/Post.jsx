import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img className={style.avatar} src="https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg" alt="avatar" />
            <div className={style.descr}>{props.messages}</div>
            <img className={style.like} src="https://pngimg.com/uploads/like/like_PNG49.png" alt="" />
            <span className={style.like}>{props.likeCount}</span>  
        </div>
    )
}

export default Post;