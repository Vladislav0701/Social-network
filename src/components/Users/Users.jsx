import React from "react";

import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>

            {props.users.map(u =>
                <div className={style.wrapper}>
                    <div className={style.item}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="userPhoto" />
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.name}>
                            <h3>{u.name}</h3>
                            <p>{u.status != null ? u.status : "In touch"}</p>
                        </div>

                        <div className={style.location}>
                            <div className={style.country}>Country</div>
                            <div>City</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users;