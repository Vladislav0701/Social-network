import { connect } from "react-redux";
import { compose } from "redux";

import UsersApiContainer from "./UsersApiContainer"
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsersThunkCreator } from "./../../redux/UsersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, 
        toggleIsFollowingProgress, getUsersThunkCreator})
)(UsersApiContainer)