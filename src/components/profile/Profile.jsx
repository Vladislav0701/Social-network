import React from 'react';

import MyInfo from './MyInfo/MyInfo';
import MyPostContainer from './MyPost/MyPostContainer';
import style from "./Profile.module.css";

const Profile = (props) => {

    return (
        <div className={style.content}>
            <div className={style.img}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="Profile" />
            </div>
            <MyInfo profile={props.profile}/>
            <MyPostContainer profile={props.profile}/>
        </div>
    )
}


export default Profile;