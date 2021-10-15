import React from "react";

import style from "./DialogMessage.module.css";

const DialogMessage = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default DialogMessage;