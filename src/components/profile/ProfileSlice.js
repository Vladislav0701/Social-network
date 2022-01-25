import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { profileAPI } from "../../api/Api";

let initialState = {
    postData: [
        {id: 1, messages: "Hello how are you", likeCount: 23},
        {id: 2, messages: "Hi! How was your day", likeCount: 79}
      ],
      profile: null,
      profileLoadingStatus: 'idle',
      status: null
}

export const fetchProfile = createAsyncThunk(
    'profilePage/fetchProfile',
    async (userId) => {
        return await profileAPI.getProfile(userId);
    }
)

export const fetchStatus = createAsyncThunk(
    'profilePage/fetchStatus',
    async (status) => {
        return await profileAPI.updateUserStatus(status)
    }
)

const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        profileFetching: state => {state.profileLoadingStatus = 'loading'}, // Используется
        addPost: (state, action) => {           // Используется
            state.profileLoadingStatus = 'idle';
            state.postData = [ {id: uuidv4(), messages: action.payload, likeCount: 0}, ...state.postData];
        },
        setUserProfile: (state, action) => {
            state.profile = action.payload.data; 
        },
        setStatus: (state, action) => {
            state.status = action.payload
        },
        getProfileUser: (state, action) => {
            profileAPI.getProfile(action.userId)
                .then(response => {
                    state.profile = response.data; 
                })
        },
        getStatus: (state, action) => {             // Используется
            profileAPI.getStatus(action.userId)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        state.status = response.data
                    }  
                })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, state => {state.profileLoadingStatus = 'loading'})
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.profileLoadingStatus = 'idle';
                state.profile = action.payload.data;
            })
            .addCase(fetchProfile.rejected, state => {state.profileLoadingStatus = 'error'})
            .addCase(fetchStatus.pending, state => {console.log('loading')})
            .addCase(fetchStatus.fulfilled, (state, action) => {
                debugger
                state.status = action.meta.arg;
            })
            .addCase(fetchStatus.rejected, state => {console.log('Error!')})
            .addDefaultCase(() => {})
    }

})

const {actions, reducer} = profileSlice;

export default reducer;

export const {
    profileFetching,
    addPost,
    setUserProfile,
    setStatus,
    getProfileUser,
    getStatus,
    updateUserStatus
} = actions;