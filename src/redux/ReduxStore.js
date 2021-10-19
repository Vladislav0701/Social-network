import { combineReducers, createStore } from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sitebarReducer from "./SidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sitebarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

