import React from "react";
import axios from "axios";

import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersAC(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPageAC(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersAC(response.data.items);
            })
    }

     render() {
        debugger;

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        
        let pages = [];


        for (let i = 1; i <= pagesCount; i++) {
            if (i <= 10) {
                pages.push(i);
            } else {
                break;
            }
        }

        return (
            <div >
                <div>
                    {pages.map(p => {
                        return  <span className={this.props.currentPage === p && style.selectedPage}
                            onClick={() => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>

                {this.props.users.map(u =>
                    <div className={style.wrapper}>
                        <div className={style.item}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="userPhoto" />
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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

}

export default Users;