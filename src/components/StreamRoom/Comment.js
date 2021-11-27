import React from 'react'
import './StreamComment.css'
export default function Comment({message}) {
    return (
        <div className="comment mb-2">
            <div >
                <span className="time-stamp-comment me-1">11:04</span>
            </div>
            <div>
                <span className="username">Minkle</span>
                <span>: </span>
                <span style={{ textAlign: ' justify' }}>{message}</span>
            </div>
        </div>
    )
}
