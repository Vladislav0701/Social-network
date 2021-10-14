import React from "react";
import style from "./myInfo.module.css";

const MyInfo = (props) => {
    return (
        <div className={style.wrapper}>
            <img src="https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg" alt="avatar" />
            <div>
                <h2>
                    Neytiri Salli
                </h2>
                <p>
                    Data of Birth: {props.data}
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