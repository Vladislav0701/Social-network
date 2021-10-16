import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {addPost, updateNewPostText, addMessage} from './rexud/state';

import './index.css';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} 
                 addPost={addPost} 
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
    document.getElementById('root')
    );
}