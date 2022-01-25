import React from "react";

import style from "./MyInfo.module.css";
import Preloader from "../../common/preloader/Preloader"
import ProfileStatus from "./ProfileStatus";

const MyInfo = (props) => {

    const content = props.profile ? <View {...props}/> : <Preloader/>;
    return (
        <div className={style.wrapper}>
           {content} 
        </div>
    )
}

const View = (props) => {

    return (
        <>
             <img src={props.profile.photos.small} alt="avatar" />
            <div>
                <h2>
                    {props.profile.fullName}
                </h2>
                <p>
                    Data of Birth: <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </p>
                <p>
                    About Me: {props.profile.aboutMe}
                </p>
                <p>
                    Education: {props.education}
                </p>
                <p>
                    Web Site: {props.site}
                </p>
            </div>
        </>
    )
}

export default MyInfo;