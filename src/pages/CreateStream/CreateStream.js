import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { myAxios } from '../../utils/AxiosSetup';
import { useNavigate } from 'react-router';
// import {socket} from '../../services/socketIO.js';
import { UserContext } from '../../context/userContext.tsx';

export default function CreateStream() {
  const [categories, setCategories] = useState([]);
  const [userContext] = useContext(UserContext);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [roomName, setRoomName] = useState(null);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  function getCategory() {
    myAxios.get('/category/get-category').then((response) => {
      const data = response.data;
      const categoryList = data.map((element) => element.categoryName);
      setCategories(categoryList);
    });
  }

  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      await myAxios.post('/rooms/create-room', {
        roomName: roomName,
        description: description,
        category: category,
        roomHost: userContext.username,
      });
      navigate(`/stream/room/${roomName}`, {
        replace: false,
        state: { isStreamer: true },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article>
      <Container className="mt-5">
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
          <Form
            autoComplete='off'
            noValidate
            validated={validated}
            style={{ width: '500px' }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-5">
              <Form.Group as={Col} md="6" controlId="roomName">
                <Form.Label>Room's name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Choose a name"
                    onChange={(event) => setRoomName(event.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a room's name.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="category">
                <Form.Label>Category</Form.Label>
                <InputGroup hasValidation></InputGroup>
                <Form.Select
                  onChange={(event) => setCategory(event.target.value)}
                  // required
                >
                  {/*<option>Select a category</option>*/}
                  {categories.map((element) => (
                    <option>{element}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select a category.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Row className="mb-5 px-2">
                <InputGroup hasValidation>
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Enter description"
                    style={{ minHeight: '100px' }}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a description.
                  </Form.Control.Feedback>
                </InputGroup>
              </Row>
            </Form.Group>

            <Row className="mb-3 d-flex flex-row">
              <Form.Group
                className="d-flex justify-content-end"
                as={Col}
                md="6"
                controlId="cancelButton"
              >
                <Button
                  style={{ width: '100px' }}
                  className="me-2 buttonOutlined"
                >
                  Cancel
                </Button>
              </Form.Group>

              <Form.Group  as={Col} md="6" controlId="createButton">
                <Button
                  md="6"
                  style={{ width: '100px' }}
                  className="me-2 buttonFilledSecondary"
                  variant="outline-none"
                  type="submit"
                >
                  Create
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </Container>
    </article>
  );
}
