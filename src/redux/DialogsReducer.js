const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {

            let newMessage = {
                id: 5, 
                message: state.newMessageText
            }
            let stateCopy = {...state};
            stateCopy.messageData = [...state.messageData];
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.messageData = [...state.messageData];
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default: 
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}

export default dialogsReducer;