import React from "react";

import User from "./User/User";


const Users = (props) => {
    let usersElements = props.users.map((e) => <User 
        id={e.id}
        followed={e.followed}
        fullName={e.fullName} 
        status={e.status}
        country={e.location.country}
        city={e.location.city}
        />)
    return (
       <div>
           {usersElements}
       </div>
    )
}

export default Users;