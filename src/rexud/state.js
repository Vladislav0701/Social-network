let state = {

    profilePage: {
        postData: [
            {id: 1, messages: "Hello how are you", likeCount: 23},
            {id: 2, messages: "Hi! How was your day", likeCount: 79}
          ]
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
    
    friends: [
      { name: "Andrew", id: 1},
      { name: "Sveta", id: 2},
      { name: "Nastay", id: 3}
    ]
}
    export default state;