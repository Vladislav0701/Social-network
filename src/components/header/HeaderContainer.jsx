import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Header from "./Header";
import { getAuthUserData, logout } from "./../../redux/AuthReducer";




class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getAuthUserData();
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

export default compose(
    connect(mapStateToProps, { getAuthUserData, logout })
)(HeaderContainer);