import { combineReducers, createStore } from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sitebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sitebarReducer,
    usersPage: usersReducer,
    auth: AuthReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

