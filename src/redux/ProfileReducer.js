const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postData: [
        {id: 1, messages: "Hello how are you", likeCount: 23},
        {id: 2, messages: "Hi! How was your day", likeCount: 79}
      ],
      newPostText: "",
      profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.newPostText; 
            return {
                ...state,
                postData: [...state.postData, {id: 3, messages: text, likeCount: 0}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                postData: [...state.postData],
                newPostText: action.newText
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer;