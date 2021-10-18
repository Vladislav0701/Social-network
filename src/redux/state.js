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

  _callSubscriber() {
    console.log("state changed");
  },

  addPost() {
    let newPost = {
      id: 3,
      messages: this._state.profilePage.newPostText,
      likeCount: 0
    }
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 5, 
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messageData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state)
  },
  
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;
window.store = store;