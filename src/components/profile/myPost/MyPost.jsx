import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import Post from "./Post/Post";

import style from "./MyPost.module.css";


const MyPost = (props) => {
    let postsElements = props.postData.map((p) => <Post key={p.id} messages={p.messages} likeCount={p.likeCount} />);

    return (
        <div className={style.wrapper}>
            <h3>
                My post
            </h3>
            <Formik
                initialValues={{
                    text: ''
                }}
                validationSchema={yup.object({
                    text: yup.string().min(2).required()
                })}
                onSubmit={({text}, action) => {
                    props.onAddPost(text)
                    action.resetForm({})
                }}>
                {({isSubmitting}) => (
                    <Form className={style.news}>
                    <Field
                        required
                        as="textarea"
                        type="text" 
                        name="text"
                        placeholder="Your news..."/>
                    <button type="submit" disabled={isSubmitting}>Send</button>
                </Form>
                )}
            </Formik>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPost;