import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        followSeccess: (state, action) => {
            state.users = state.users.map(i => {
                if (i.id === action.userId) {
                    return {...i, followed: true}
                } 
                return i
            })
        },
        unfollowSeccess: (state, action) => {
            state.users = state.users.map(i => {
                if (i.id === action.userId) {
                    return {...i, followed: false}
                } 
                return i
            })
        },
        setUsers: (state, action) => {state.users = action.users},
        setCurrentPage: (state, action) => {state.currentPage = action.currentPage},
        setTotalUsersCount: (state, action) => {state.totalUsersCount = action.totalUsersCount},
        
    }
})