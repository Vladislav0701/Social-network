import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MyPost from './MyPost';
import { addPost } from '../ProfileSlice';

const MyPostContainer = () => {
    const {postData} = useSelector(state => state.profilePage);
    const dispatch = useDispatch();

    const onAddPost = (text) => {
        dispatch(addPost(text))
    }

    return <MyPost postData={postData} onAddPost={onAddPost} />
}

export default MyPostContainer;