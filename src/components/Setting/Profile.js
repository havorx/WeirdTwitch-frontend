import React, { useState } from 'react'
import image from '../../assets/03-glitch.jpg';
import { Button } from 'react-bootstrap';
import { SUB_PRIMARY_COLOR } from '../../utils/Const';
import EditProfile from './EditProfile';
const BLUR_TEXT_COLOR = "#8b949e";
export default function Profile() {

    const [isEdit, setIsEdit] = useState(true);


    return (
        <aside className="d-flex flex-column">
            <div
                className="background-image"
                style={{
                    width: '100%',
                    borderRadius: '100%', border: `2px solid ${SUB_PRIMARY_COLOR}`,
                    boxShadow: `0 0 0 1px ${SUB_PRIMARY_COLOR}`,
                    backgroundImage: `url(${image})`
                }}
            ></div>
            <h4 className="py-4" style={{ color: `${BLUR_TEXT_COLOR}` }}>Username</h4>
            <div className="mb-3">
                {isEdit ?
                    <EditProfile setIsEdit={setIsEdit}></EditProfile>
                    : <Button className="w-100 buttonFilledSecondary" variant="outline-none"
                        onClick={() => { setIsEdit(true) }}>
                        <b>  Edit profile</b>
                    </Button>}
            </div>
        </aside >
    )
}
