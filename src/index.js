import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import store from "./redux/ReduxStore";
import App from './App';

import './index.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
    document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state)
});

reportWebVitals();
