import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { serviceContext } from '../Home/Home';
import { faTwitter, faInstagram, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
    // Context api use
    const services = useContext(serviceContext);
    const [serviceAll, setServiceAll] = useState([]);
    //Social Icon 
    const twitter = <FontAwesomeIcon icon={ faTwitter} />
    const insta = <FontAwesomeIcon icon={ faInstagram} />
    const fb = <FontAwesomeIcon icon={ faFacebook} />
    const youtube = <FontAwesomeIcon icon={ faYoutube} />
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/apudebnath/data-json/main/jsonData.js`)
        .then(res => res.json())
        .then(data => setServiceAll(data))
    }, []);

    return (
        <div >
            {/* Context Api */}
            <h2 className="mt-5">{services}</h2>
            <div className="mb-5">
            <Row xs={1} md={3} className="g-5 m-auto">
                {
                    serviceAll.map(service => <Col>
                        <Card  className="courseStyle" >
                          <Card.Img variant="top" src={service.picture} />
                          <Card.Body>
                            <Card.Title className="titleStyle">{service.title}</Card.Title>
                            <Card.Title>Price: ${service.price}</Card.Title>
                            <Card.Text>{service.description.slice(0, 130)}</Card.Text> 
                            <NavLink to= {`/details/${service.id}`}>
                                <button className="border-info rounded py-1 px-4" style={{background: 'rgb(21, 163, 173)', color:'white'}}>Details</button>
                            </NavLink>
                            <h3 className="pt-3" style={{color: 'rgb(78, 86, 114)'}}><span>{fb}</span> <span className="px-3">{twitter}</span> <span>{insta}</span> <span className="px-3">{youtube}</span> </h3>
                          </Card.Body>
                        </Card>
                      </Col>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Services;