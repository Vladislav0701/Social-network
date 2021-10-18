import React from 'react';
import MyInfo from './MyInfo/MyInfo';
import MyPost from './MyPost/MyPost';
import style from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={style.content}>
            <div className={style.img}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="Profile" />
            </div>
            <MyInfo  data="07.01.1998" city="Saint Petersburg" education="BGLK" site="it-kam.com"/>
            <MyPost 
                postData={props.state.postData}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
}


export default Profile;