import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Radio as RadioIcon, Mic, PhoneOff } from 'react-feather'
import { SUB_PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/Const';
export default function StreamScreen({ roomName, isStreamer }) {

    return (
        <Card className="comment-side d-flex justify-content-between" style={{ backgroundColor: `${SUB_PRIMARY_COLOR}` }}>
            <Card.Header style={{ backgroundColor: `${SUB_PRIMARY_COLOR}`, border: 'none' }}>
                <div className="d-flex justify-content-between ">
                    <div className="d-flex align-items-center">
                        <h2 style={{ color: SECONDARY_COLOR }} className="d-inline me-4">{roomName}</h2>
                        <RadioIcon style={{ color: "#00ff31" }} />
                        <span className="ms-2 me-4">On Air</span>
                        <span>5.4k listening</span>
                    </div>
                </div>
            </Card.Header>
            {isStreamer && <Card.Footer className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#232323', border: 'none' }}>
                <Button className="audio-btn" variant="outline-none"><Mic /></Button>
                <Button className="audio-btn red-btn" variant="outline-none"><PhoneOff /></Button>
            </Card.Footer>}

        </Card>
    )
}
