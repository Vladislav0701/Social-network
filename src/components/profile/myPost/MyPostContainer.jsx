import React from 'react';

import MyPost from './MyPost';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';

const MyPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = (text) => {
        props.store.dispatch(addPostActionCreator(text));
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPost 
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText} 
            addPostAction={addPost}
            updateNewPostTextAction={onPostChange} /> 
    )
}

export default MyPostContainer;