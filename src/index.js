import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';

import './index.css';

let dialogsData = [
  { name: "Dimych", id: 1 },
  { name: "Andrey", id: 2 },
  { name: "Sveta", id: 3 },
  { name: "Nastay", id: 4 },
  { name: "Sasha", id: 5 },
  { name: "Alex", id: 6 }
];

let messageData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is your it-cam ?" },
  { id: 3, message: "Yo" },
  { id: 4, message: "What's up ?" }
]

let postData = [
  {id: 1, messages: "Hello how are you", likeCount: 23},
  {id: 2, messages: "Hi! How was your day", likeCount: 79}
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
