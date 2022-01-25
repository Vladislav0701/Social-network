import React, { useEffect} from "react";

import Profile from "./Profile";
import { fetchStatus, fetchProfile } from "./ProfileSlice";
import { useSelector, useDispatch } from "react-redux";
import Preloader from "../common/preloader/Preloader";

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const { profile, profileLoadingStatus, status} = useSelector(state => state.profilePage);
    const {id} = useSelector(state => state.auth);

    useEffect(() => {
        let userId = 2;
        dispatch(fetchProfile(userId));
        dispatch(fetchStatus(userId));
    }, [dispatch])

    const updateStatus = (status) => dispatch(fetchStatus(status))

    if (profileLoadingStatus === 'loading') {
        return <Preloader />
    }

    return (
        <Profile 
            profile={profile}
            status={status}
            updateStatus={updateStatus} />
    )
}

export default ProfileContainer;