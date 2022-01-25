import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';

import DialogItem from "./DialogItem/DialogItem"
import DialogMessage from "./DialogMessage/DialogMessage";

import style from "./Dialogs.module.css";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    const dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
    const messagesElements = state.messageData.map((m) => <DialogMessage message={m.message} />);

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>
                    {messagesElements}
                </div>
                <Formik
                    initialValues={{
                        message: ''
                    }}
                    validationSchema={yup.object({
                        message: yup.string()
                    })}
                    onSubmit={({message}, action) => {
                        props.addMessage(message)
                        action.resetForm({})}}>
                    {({ isSubmitting }) => (
                        <Form className={style.newMessage}>
                            <Field
                                required
                                as="textarea"
                                type="text"
                                name="message" />
                            <button type="submit" disabled={isSubmitting}>
                                Send
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Dialogs;