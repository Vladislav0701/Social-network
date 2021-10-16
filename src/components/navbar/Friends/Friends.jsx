import React from "react";

import style from "./Friends.module.css";

const Friends = (props) => {

    return (
        <div className={style.wrapper}>
            <h2>
                Friends
            </h2>
            <div className={style.items}>
                <div className={style.item}>
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt="" className={style.logo} />
                    <p className={style.name}>
                        {props.name}
                    </p>
                </div>
                <div className={style.item}>
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt="" className={style.logo} />
                    <p className={style.name}>
                        {props.name}
                    </p>
                </div>
                <div className={style.item}>
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt="" className={style.logo} />
                    <p className={style.name}>
                        {props.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Friends;