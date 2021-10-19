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
        case ADD_POST: {

            let newPost = {
                id: 3,
                messages: state.newPostText,
                likeCount: 0
            }
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }   
        case UPDATE_NEW_POST_TEXT: {

            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.newPostText = action.newText;
            return stateCopy;
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