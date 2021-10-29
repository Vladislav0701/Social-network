import React from 'react';
import { Redirect } from 'react-router';

import MyInfo from './MyInfo/MyInfo';
import MyPostContainer from './MyPost/MyPostContainer';
import style from "./Profile.module.css";

const Profile = (props) => {

    if (!props.isAuth) {
        return <Redirect to={"/login"} />
    };

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