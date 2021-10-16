import React from "react"

import style from "./Friend.module.css"

const Friend = (props) => {
    return (
        <div className={style.wrapper}>
            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt="" className={style.logo} />
            <div className={style.name}>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;