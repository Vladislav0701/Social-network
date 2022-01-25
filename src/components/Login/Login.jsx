import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as yup from 'yup';

import { login } from "../../redux/AuthReducer";
import style from "./Login.module.css";


const Login = ({isAuth, login}) => {

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={style.container}>
            <h1>
                Login
            </h1>
            <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            validationSchema={yup.object({
                email: yup.string().email("Must be a valid email").required("Required field"),
                password: yup.string().min(8, "Please enter at least 8 characters").required("Required field")
            })}
            onSubmit={({email, password, rememberMe}, action) => {
                login(email, password, rememberMe)
                action.resetForm({})}}>
                {({isSubmitting}) => (
                <Form>
                    <Field required className={style.form_login} placeholder="Login" name="email"/>
                    <ErrorMessage className={style.error} name="email" component="div"/>
                    <Field required className={style.form_password} placeholder="Password" type="password" name="password"/>
                    <ErrorMessage className={style.error} name="password" component="div"/>
                    <label className={style.form_checkbox}  htmlFor="rememberMe">
                        <Field as="input" type="checkbox" id="rememberMe" name="rememberMe"/>
                        <ErrorMessage className={style.error} name="rememberMe" component="div"/>
                        Remember login details
                    </label>
                    
                    <button className={style.form_button} type="submit" disabled={isSubmitting}>Login</button>
                </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);