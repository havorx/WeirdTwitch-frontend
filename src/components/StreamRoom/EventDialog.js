import React, { useContext, useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { SocketContext, TopicContext } from '../../pages/StreamRoom/StreamRoom';
// import {socket} from "../../services/socketIO";

export default function EventDialog(props) {
  const [setTopic] = useContext(TopicContext);
  const [topicName, setTopicName] = useState('');
  const [topicDesc, setTopicDesc] = useState('');
  const roomName = props.roomName;
  const socket = useContext(SocketContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topicName.trim() !== '' && topicDesc.trim() !== '') {
      const { onHide } = props;
      socket.emit('set-topic', { topicName, topicDesc, roomName });
      setTopic({ topicName, topicDesc });
      setTopicName('');
      setTopicDesc('');
      onHide();
    }
  };

  useEffect(() => {
    socket.on('update-topic', ({ topicName, topicDesc }) => {
      setTopic({ topicName, topicDesc });
    });
  }, []);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header
        style={{ backgroundColor: '#18181b', justifyContent: 'center' }}
        closeButton
        closeVariant="white"
      >
        <Modal.Title id="contained-modal-title-vcenter ">
          <span>Create Topic</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: '#18181b', paddingBottom: '40px' }}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Topic Name</Form.Label>
            <Form.Control
              type="text"
              autocomplete="off"
              placeholder="Enter category name"
              onChange={(event) => {
                setTopicName(event.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              style={{ minHeight: '150px' }}
              placeholder="Enter description"
              onChange={(event) => {
                setTopicDesc(event.target.value);
              }}
              required
            />
          </Form.Group>

          <Button
            className="mt-3 w-100 buttonFilledSecondary"
            variant="outline-none"
            type="submit"
          >
            <b>Create</b>
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
