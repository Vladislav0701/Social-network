const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id: 1, followed:false, fullName: "Dmitry", status: "I am a boss", location: {country: "Belarus", city: "Minsk"}},
        {id: 2, followed:true, fullName: "Sveta", status: "I am a boss too", location: {country: "Belarus", city: "Ivatchevichi"}},
        {id: 3, followed:true, fullName: "Andrey", status: "I am a boss too", location: {country: "Russia", city: "Moscow"}},
        {id: 4, followed:false, fullName: "Nastya", status: "I am a boss", location: {country: "Ukraine", city: "Kiev"}}
    ]
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
        default: return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;