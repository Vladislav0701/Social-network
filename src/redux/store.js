import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer"


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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sitebar = sidebarReducer(this._state.siteBar, action);

    this._callSubscriber(this._state);
    }
    
}

export default store;