import React from "react";

import style from "./MyInfo.module.css";
import Preloader from "../../common/preloader/Preloader"

const MyInfo = (props) => {

    if(!props.profile) {
        <Preloader />
    }

    return (
        <div className={style.wrapper}>
            <img src={props.profile.photos.small} alt="avatar" />
            <div>
                <h2>
                    {props.profile.fullName}
                </h2>
                <p>
                    Data of Birth: {props.profile.aboutMe}
                </p>
                <p>
                    City: {props.city}
                </p>
                <p>
                    Education: {props.education}
                </p>
                <p>
                    Web Site: {props.site}
                </p>
            </div>
            
        </div>
    )
}

export default MyInfo;