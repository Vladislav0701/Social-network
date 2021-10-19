import { combineReducers, createStore } from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sitebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sitebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

