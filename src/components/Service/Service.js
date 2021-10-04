import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook} from '@fortawesome/free-solid-svg-icons';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {title, picture, price, description } = props.service;
/*     const twitter = <FontAwesomeIcon icon={ faTwitter} />
    const insta = <FontAwesomeIcon icon={ faInstagram} />
    const fb = <FontAwesomeIcon icon={ faFacebook} /> */
    return (
        <div >           
            <Col>
              <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>{description.slice(0,150)}</Card.Text>
                    <button className="border rounded py-2 px-4" style={{background: 'rgb(21, 163, 173)', color:'white'}}>Know More</button>
                    {/* <p><span>{twitter}</span> <span>{insta}</span> </p> */}
                </Card.Body>
              </Card>
            </Col>                                    
        </div>
    );
};

export default Service;
