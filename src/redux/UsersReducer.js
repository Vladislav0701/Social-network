import { getUsers, queryUnfollow, queryFollow } from "../api/Api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( e => {
                    if (e.id === action.userId) {
                        return {...e, followed: true}
                    }
                    return e;
                })
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( e => {
                    if (e.id === action.userId) {
                        return {...e, followed: false}
                    }
                    return e;
                })
        }
        case SET_USERS: 
            return { 
                ...state, 
                users: action.users 
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {
            ...state,
            followingInProgress: action.isFetching 
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
        }
        default: return state
    }
}

export const followSeccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSeccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const follow = (userId) => {
    
    return (dispatch) => {

        dispatch(toggleIsFollowingProgress(true, userId));

        queryFollow(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSeccess(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            });
        }
}

export const unfollow = (userId) => {

    return (dispatch) => {
        
        dispatch(toggleIsFollowingProgress(true, userId));

        queryUnfollow(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSeccess(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId));
        });
    }
}

export default usersReducer;