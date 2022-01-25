const ADD_MESSAGE = "ADD-MESSAGE";

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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: 
            let text = action.message;
            return {
              ...state,
              messageData: [...state.messageData, {id: 5, message: text}],
            }
        default: 
            return state;
    }
}

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message})

export default dialogsReducer;