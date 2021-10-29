import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

import Profile from "./Profile";
import { setUserProfile, getProfileUserThunkCreator } from "../../redux/ProfileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";




class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileUserThunkCreator(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
    
});

export default compose(
    connect(mapStateToProps, { setUserProfile, getProfileUserThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

