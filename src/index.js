import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import store from "./redux/ReduxStore";
import App from './App';

import './index.css';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter> 
            <Provider store={store}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </Provider>
        </BrowserRouter>,
    document.getElementById('root')
    );
}

rerenderEntireTree();

reportWebVitals();
