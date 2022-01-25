import { useState } from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState('');

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{props.status || '_____'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input 
                        onChange={(e) => setStatus(e.currentTarget.value)} 
                        autoFocus={true} onBlur={deactivateEditMode} 
                        value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatus;