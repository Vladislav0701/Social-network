const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postData: [
        {id: 1, messages: "Hello how are you", likeCount: 23},
        {id: 2, messages: "Hi! How was your day", likeCount: 79}
      ],
      newPostText: ""
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
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer;