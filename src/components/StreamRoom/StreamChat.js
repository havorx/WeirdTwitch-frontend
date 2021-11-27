import React, {useRef, useEffect, useState} from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import {SUB_PRIMARY_COLOR, SECONDARY_COLOR} from '../../utils/Const';
import {Send} from 'react-feather';
import './StreamComment.css';
import Comment from './Comment';

export default function StreamChat({isStreamer}) {
  const [text, setText] = useState('');
  const [message, setMessage] = useState(['alo', 'text2']);
  const textareaRef = useRef(null);
  const textareaMaxHeight = 150;

  function resize() {
    const tx = textareaRef.current;
    tx.setAttribute('style', 'height:' + (tx.scrollHeight) +
        'px; overflow-y:hidden; resize:none; padding-right: 40px');
    // tx.addEventListener("input", OnInput, false);

  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(oldMessage => {
      return [text, ...oldMessage];
    });
  }

  function handleOnInput() {
    const tx = textareaRef.current;
    tx.style.height = 'auto';
    console.log(tx.scrollHeight);
    if (tx.scrollHeight < textareaMaxHeight) {
      tx.style.height = (tx.scrollHeight) + 'px';
    } else {
      tx.setAttribute('style',
          'overflow-y: auto; resize:none; padding-right: 10px');
      tx.style.height = `${textareaMaxHeight}px`;
    }
  }

  useEffect(() => {
    resize();
    return () => {
    };
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
              <Comment message={element}/>
          ))}
        </Card.Body>
        <Card.Footer className="mt-2 p-1 card-comment-footer position-relative">
          <Form onSubmit={handleSubmit}>
            <Form.Control
                className="comment-input"
                as="textarea"
                placeholder="Leave a comment here"
                ref={textareaRef}
                onInput={handleOnInput}
                onChange={event => setText(event.target.value)}
            />
            <div className={`d-flex ${!isStreamer
                ? 'justify-content-between'
                : 'justify-content-end'}`}>
              {!isStreamer && <Button variant="outline-none"
                                      style={{color: SECONDARY_COLOR}}>Donate</Button>}
              <Button variant="outline-none" type="submit"
                      style={{color: SECONDARY_COLOR}}><Send/></Button>
            </div>
          </Form>
        </Card.Footer>
      </Card>
  );
}
