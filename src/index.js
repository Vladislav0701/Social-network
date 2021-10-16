import reportWebVitals from './reportWebVitals';

import state from "./rexud/state";
import { rerenderEntireTree } from './Render';

import './index.css';

rerenderEntireTree(state);

reportWebVitals();
