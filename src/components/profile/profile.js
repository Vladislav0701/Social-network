import React from 'react';
import MyInfo from './myInfo/myInfo';
import MyPost from './myPost/myPost';
import style from "./profile.module.css";

const Profile = () => {
    return (
        <div className={style.content}>
            <div className={style.img}>
                <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="Profile" />
            </div>
            <MyInfo  data="07.01.1998" city="Saint Petersburg" education="BGLK" site="it-kam.com"/>
            <MyPost />
        </div>
    )
}


export default Profile;