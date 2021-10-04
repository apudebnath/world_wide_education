import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {title, picture, price, description } = props.service;
    return (
        <div >           
            <Col>
              <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>{description.slice(0,150)}</Card.Text>
                    <button className="border rounded bg-info py-1 px-3">Know More</button>
                </Card.Body>
              </Card>
            </Col>                                    
        </div>
    );
};

export default Service;
