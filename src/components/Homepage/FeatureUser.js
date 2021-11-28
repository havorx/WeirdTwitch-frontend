import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import image from '../../assets/03-glitch.jpg';
import {
  PRIMARY_COLOR,
  SUB_PRIMARY_COLOR,
  SUB_PRIMARY_TEXT,
} from '../../utils/Const';

const arr = [0, 1, 2, 3, 4, 5, 6];
const cate = ['Category 1', 'Category 2', 'Category 3'];
export default function FeatureUser() {
  const userDetail = [
    {
      username: 'mink',
      description: 'hay',
      category: ['Folk'],
    },
    {
      username: 'da',
      description: 'hay',
      category: ['Poetry'],
    },];
  const [user, setUser] = useState(userDetail);

  return (
    <div className="basic-grid-four mt-4">
      {user.map(element => {
        return <Card className="me-4 mb-4"
          style={{
            width: '100%',
            border: `1px solid ${SUB_PRIMARY_COLOR}`,
          }}
          key={element.username}
        >
          <Card.Header
            className="d-flex flex-column justify-content-center align-items-center pt-3"
            style={{ background: `${SUB_PRIMARY_COLOR}` }}>
            <img src={image} alt="" style={{
              width: '50px',
              height: '50px',
              borderRadius: '100%',
            }} />
            <p className="mb-0">{element.username}</p>
          </Card.Header>
          <Card.Body style={{ background: PRIMARY_COLOR }}>
            <Card.Text className="long-and-truncated">
              <b> Description: </b> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.Sunt necessitatibus labore, eveniet commodi
              nesciunt, architecto quasi nostrum possimus ut molestiae
              eligendi deleniti, modi optio sequi corporis nam impedit alias
              laborum.
            </Card.Text>
            <Card.Text>
              {element.category.map(category => {
                return <a href="*"
                  key={category}
                  style={{ color: SUB_PRIMARY_TEXT }}>| {category} </a>;
              })}
            </Card.Text>
          </Card.Body>
        </Card>;
      })}
    </div>
  );
}
