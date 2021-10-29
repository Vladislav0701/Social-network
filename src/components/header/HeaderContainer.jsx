import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import { setAuthUserData, setAuthUser } from "./../../redux/AuthReducer";



class HeaderContainer extends Component {

    componentDidMount() {
        this.props.setAuthUser();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
})

export default connect(mapStateToProps, { setAuthUserData, setAuthUser })(HeaderContainer);