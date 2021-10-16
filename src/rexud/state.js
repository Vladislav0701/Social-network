import {rerenderEntireTree} from "../Render";

let state = {

    profilePage: {
        postData: [
            {id: 1, messages: "Hello how are you", likeCount: 23},
            {id: 2, messages: "Hi! How was your day", likeCount: 79}
          ],
        newPostText: "sdas"
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
    },
    
    siteBar: {
      friends: [
      { name: "Andrew", id: 1},
      { name: "Sveta", id: 2},
      { name: "Nastay", id: 3}
    ]
    }
    
}

export let addPost = () => {
  let newPost = {
    id: 3,
    messages: state.profilePage.newPostText,
    likeCount: 0
  }
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addMessage = (postMessage) => {
  let newMessage = {
    id: 5, 
    message: postMessage
  }
  state.dialogsPage.messageData.push(newMessage);
  rerenderEntireTree(state);
}

export default state;