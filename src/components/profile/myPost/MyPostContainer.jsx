import React from 'react';
import { connect } from "react-redux";

import MyPost from './MyPost';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostAction: (text) => {
            dispatch(addPostActionCreator(text));
        },
        updateNewPostTextAction: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;