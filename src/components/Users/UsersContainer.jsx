import React from "react";
import { connect } from "react-redux";

import Users from "./Users"
import { followAC, unfollowAC, setUsersAC } from "./../../redux/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsersAC: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const MyUsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default MyUsersContainer;