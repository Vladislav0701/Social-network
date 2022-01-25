import { configureStore } from '@reduxjs/toolkit';

import profilePage from "../components/Profile/ProfileSlice";
import dialogsReducer from "./DialogsReducer";
import sitebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";

let dialogsPage = dialogsReducer;
let sidebar = sitebarReducer;
let usersPage = usersReducer;
let auth = AuthReducer;

const store = configureStore({
    reducer: {
        profilePage,
        dialogsPage,
        sidebar,
        usersPage,
        auth
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

window.store = store;

export default store;

