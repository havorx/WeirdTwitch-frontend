import React from 'react';
import './StreamComment.css';

export default function Message({message, username}) {
  return (
      <div className="comment mb-2">
        <div>
          <span className="time-stamp-comment me-1"></span>
        </div>
        <div>
          <span className="username">{username}</span>
          <span>: </span>
          <span style={{textAlign: ' justify'}}>{message}</span>
        </div>
      </div>
  );
}
