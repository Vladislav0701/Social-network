const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {

  _state: {

    profilePage: {
        postData: [
          {id: 1, messages: "Hello how are you", likeCount: 23},
          {id: 2, messages: "Hi! How was your day", likeCount: 79}
        ],
        newPostText: ""
    },

    dialogsPage: {
        dialogsData: [
          { name: "Dimych", id: 1 },
          { name: "Andrey", id: 2 },
          { name: "Sveta", id: 3 },
          { name: "Nastay", id: 4 },
          { name: "Sasha", id: 5 },
          { name: "Alex", id: 6 }
        ],
        messageData: [
          { id: 1, message: "Hi" },
          { id: 2, message: "How is your it-cam ?" },
          { id: 3, message: "Yo" },
          { id: 4, message: "What's up ?" }
        ],
        newMessageText: ""
    },
    
    siteBar: {
      friends: [
        { name: "Andrew", id: 1},
        { name: "Sveta", id: 2},
        { name: "Nastay", id: 3}
      ]
    } 
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if ( action.type === ADD_POST) {
      let newPost = {
        id: 3,
        messages: this._state.profilePage.newPostText,
        likeCount: 0
      }
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if ( action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if ( action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5, 
        message: this._state.dialogsPage.newMessageText
      }
      debugger;
      this._state.dialogsPage.messageData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      debugger;
      this._callSubscriber(this._state);
    } else if ( action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      debugger;
      this._callSubscriber(this._state)
      debugger;
    }
  }
  
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}

export default store;