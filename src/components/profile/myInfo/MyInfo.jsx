import React from "react";

import style from "./MyInfo.module.css";
import Preloader from "../../common/preloader/Preloader"
import ProfileStatus from "./ProfileStatus";

const MyInfo = (props) => {

    if(!props.profile) {
       return <Preloader />
    }

    return (
        <div className={style.wrapper}>
            <img src={props.profile.photos.small} alt="avatar" />
            <div>
                <h2>
                    {props.profile.fullName}
                </h2>
                <p>
                    Data of Birth: <ProfileStatus {...props}/>
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