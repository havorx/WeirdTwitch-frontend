import React, {useRef, useEffect, useState, useContext} from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import {SUB_PRIMARY_COLOR, SECONDARY_COLOR} from '../../utils/Const';
import {Send} from 'react-feather';
import './StreamComment.css';
import Message from './Message.js';
import {socket} from '../../services/socketIO.js';
import {UserContext} from '../../context/userContext.tsx';

export default function StreamChat({isStreamer, roomName}) {
  const [userContext] = useContext(UserContext);
  const [text, setText] = useState('');
  const [message, setMessage] = useState([]);
  const textareaRef = useRef(null);
  const textareaMaxHeight = 150;

  function resize() {
    const tx = textareaRef.current;
    tx.setAttribute('style', 'height:' + (tx.scrollHeight) +
        'px; overflow-y:hidden; resize:none; padding-right: 40px');
  }

  function handleClick() {
    if (text !== '') {
      const data = {
        text: text, roomName: roomName, username: userContext.username,
      };
      socket.emit('send-message', data);
      /*   setMessage(oldMessage => {
           return [text, ...oldMessage];
         });*/
      setText('');
    }
  }

  function handleOnInput(event) {
    //change input size if text too long
    const tx = textareaRef.current;
    tx.style.height = 'auto';
    if (tx.scrollHeight < textareaMaxHeight) {
      tx.style.height = (tx.scrollHeight) + 'px';
    } else {
      tx.setAttribute('style',
          'overflow-y: auto; resize:none; padding-right: 10px');
      tx.style.height = `${textareaMaxHeight}px`;
    }
    //
    setText(event.target.value);
  }

  useEffect(() => {
    resize();
    return () => {
    };
  }, []);
  useEffect(() => {
    if (isStreamer === true) {
      socket.on('host-update-chat', () => {
        socket.emit('host-updated-chat', 'awdawd');
      });
    } else {
      socket.on('message-for-new-join', data => {
        setMessage([data]);
        socket.off('message-for-new-join');
      });
    }

    socket.on('send-message', data => {
      setMessage(oldMessage => [data, ...oldMessage]);
    });
  }, []);
  return (
      <Card className="comment-side d-flex justify-content-between"
            style={{background: 'inherit'}}>
        <Card.Header className="card-header"
                     style={{backgroundColor: `${SUB_PRIMARY_COLOR}`}}>
          <h5 className="mb-0">Chat</h5>
        </Card.Header>
        <Card.Body
            className="comment-card-header d-flex flex-wrap-nowrap flex-column-reverse "
            style={{
              overflowX: 'hidden',
              overflowY: 'auto',
              padding: '10px 5px',
            }}>
          {message.map(element => (
              <Message key={element} username={element.username}
                       message={element.text}/>
          ))}
        </Card.Body>
        <Card.Footer className="mt-2 p-1 card-comment-footer position-relative">
          <Form>
            <Form.Control
                className="comment-input"
                as="textarea"
                placeholder="Leave a comment here"
                ref={textareaRef}
                onInput={handleOnInput}
                value={text}
            />
            <div className={`d-flex ${!isStreamer
                ? 'justify-content-between'
                : 'justify-content-end'}`}>
              {!isStreamer && <Button variant="outline-none"
                                      style={{color: SECONDARY_COLOR}}>Donate</Button>}
              <Button variant="outline-none" onClick={handleClick}
                      style={{color: SECONDARY_COLOR}}><Send/></Button>
            </div>
          </Form>
        </Card.Footer>
      </Card>
  );
}
