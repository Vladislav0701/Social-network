import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import store from "./redux/state";
import App from './App';

import './index.css';

let rerenderEntireTree = (state) => {
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} 
                 addPost={store.addPost.bind(store)} 
                 addMessage={store.addMessage.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </React.StrictMode>,
    document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
