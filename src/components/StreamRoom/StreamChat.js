import React, { useRef, useEffect, useState, useContext } from 'react';
import { Card, Button, Form, NavDropdown, Dropdown } from 'react-bootstrap';
import { SUB_PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/Const';
import { Send } from 'react-feather';
import './StreamComment.css';
import Message from './Message.js';
// import {socket} from '../../services/socketIO.js';
import { UserContext } from '../../context/userContext.tsx';
import LoginPopup from '../Authen/LoginPopup';
import EventDropdown from './EventDropdown';

export default function StreamChat({
  isStreamer,
  roomName,
  setTopic,
  audience,
  ...props
}) {
  const [userContext] = useContext(UserContext);
  const [text, setText] = useState('');
  const [message, setMessage] = useState([]);
  const [loginShow, setLoginShow] = useState(false);
  const textareaRef = useRef(null);
  const textareaMaxHeight = 150;
  console.log(audience);
  //test data
  // const audience = ["minh", "le", "nguyen", "vinh", "gosu", "duc", "thinh"]
  const isLogin = !!userContext.token;

  function resize() {
    const tx = textareaRef.current;
    tx.setAttribute(
      'style',
      'height:' +
        tx.scrollHeight +
        'px; overflow-y:hidden; resize:none; padding-right: 40px',
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim() !== '') {
      const data = {
        text: text,
        roomName: roomName,
        username: userContext.username,
      };
      props.socket.emit('send-message', data);
      setText('');
    }
  }

  function handleOnInput(event) {
    //change input size if text too long
    const tx = textareaRef.current;
    tx.style.height = 'auto';
    if (tx.scrollHeight < textareaMaxHeight) {
      tx.style.height = tx.scrollHeight + 'px';
    } else {
      tx.setAttribute(
        'style',
        'overflow-y: auto; resize:none; padding-right: 10px',
      );
      tx.style.height = `${textareaMaxHeight}px`;
    }
    //
    setText(event.target.value);
  }

  useEffect(() => {
    resize();
    return () => {};
  }, []);

  useEffect(() => {
    props.socket.on('send-message', (data) => {
      setMessage((oldMessage) => [data, ...oldMessage]);
    });
  }, []);

  return (
    <>
      <Card
        className="comment-side d-flex justify-content-between"
        style={{ background: 'inherit' }}
      >
        <Card.Header
          className="card-header d-flex justify-content-between align-items-center"
          style={{ backgroundColor: `${SUB_PRIMARY_COLOR}` }}
        >
          <h5 className="mb-0">Chat</h5>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Audience"
            menuVariant="dark"
            className="py-2"
          >
            <div
              className="px-2 py-2"
              style={{ maxHeight: '250px', overflowY: 'auto' }}
            >
              {audience &&
                audience.map((element) => (
                  <>
                    <p className="mb-0">{element.username}</p>
                    <Dropdown.Divider />
                  </>
                ))}
            </div>
          </NavDropdown>
        </Card.Header>
        <Card.Body
          className="comment-card-header d-flex flex-wrap-nowrap flex-column-reverse "
          style={{
            overflowX: 'hidden',
            overflowY: 'auto',
            padding: '10px 5px',
          }}
        >
          {message.map((element) => (
            <Message
              key={element}
              username={element.username}
              message={element.text}
            />
          ))}
        </Card.Body>
        <Card.Footer className="mt-2 p-1 card-comment-footer position-relative">
          <Form onSubmit={handleSubmit}>
            {isLogin ? (
              <Form.Control
                className="comment-input"
                as="textarea"
                placeholder="Leave a comment here"
                ref={textareaRef}
                onInput={handleOnInput}
                value={text}
              />
            ) : (
              <Form.Control
                className="comment-input"
                as="textarea"
                placeholder="Login to comment"
                ref={textareaRef}
                value=""
                onClick={() => {
                  setLoginShow(true);
                }}
              />
            )}
            <div className={`d-flex justify-content-between`}>
              {!isStreamer && (
                <Button
                  variant="outline-none"
                  style={{ color: SECONDARY_COLOR }}
                  disabled={!isLogin}
                >
                  Donate
                </Button>
              )}
              {isStreamer && (
                <EventDropdown roomName={roomName} setTopic={setTopic} />
              )}
              <Button
                variant="outline-none"
                disabled={!isLogin}
                type="submit"
                style={{ color: SECONDARY_COLOR }}
              >
                <Send />
              </Button>
            </div>
          </Form>
        </Card.Footer>
      </Card>
      <LoginPopup show={loginShow} onHide={() => setLoginShow(false)} />
    </>
  );
}
