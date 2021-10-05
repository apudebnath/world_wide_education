import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { Card, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Service = (props) => {
    const {title, picture, price, description, id } = props.service;
    //Social Icon 
    const twitter = <FontAwesomeIcon icon={ faTwitter} />
    const insta = <FontAwesomeIcon icon={ faInstagram} />
    const fb = <FontAwesomeIcon icon={ faFacebook} />
    const youtube = <FontAwesomeIcon icon={ faYoutube} />
    return (
        <div >           
            <Col>
              <Card className="courseStyle">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>{description.slice(0,100)}</Card.Text>
                    <NavLink to= {`/details/${id}`}>
                                <button className="border-info rounded py-1 px-5 fs-5" style={{background: 'rgb(21, 163, 173)', color:'white'}}>Details</button>
                            </NavLink>
                    {/* Social Icon */}
                    <h2 className="pt-3" style={{color: 'rgb(78, 86, 94)'}}><span>{fb}</span> <span className="px-3">{twitter}</span> <span>{insta}</span> <span className="px-3">{youtube}</span> </h2>
                </Card.Body>
              </Card>
            </Col>                                    
        </div>
    );
};

export default Service;
