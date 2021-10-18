import React from "react";

import Friend from "./Friend/Friend";

import style from "./Friends.module.css";

const Friends = (props) => {
    const friendsElements = props.state.friends.map((p) => <Friend name={p.name} />)

    return (
        <div className={style.wrapper}>
            <h2>
                Friends
            </h2>
            <div className={style.item}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;