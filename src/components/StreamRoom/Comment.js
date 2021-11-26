import React from 'react'
import './StreamComment.css'
export default function Comment() {
    return (
        <div className="comment mb-2">
            <div >
                <span className="time-stamp-comment me-1">11:04</span>
            </div>
            <div>
                <span className="username">Minkle</span>
                <span>: </span>
                <span style={{ textAlign: ' justify' }}>Lorem ipsum dolor  quos deleniti officiis iure, iusto rerum fugit fuga necessitatibus assumenda obcaecati, praesentium laboriosam!</span>
            </div>
        </div>
    )
}
