import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { serviceContext } from '../Home/Home';
import './Services.css';

const Services = () => {
    const services = useContext(serviceContext);
    const [serviceAll, setServiceAll] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/apudebnath/data-json/main/jsonData.js`)
        .then(res => res.json())
        .then(data => setServiceAll(data))
    }, []);

    return (
        <div >
            <h2 className="my-5">{services}</h2>
            <div className="mb-5">
            <Row xs={1} md={3} className="g-5 m-auto">
                {
                    serviceAll.map(service => <Col>
                        <Card  className="courseStyle">
                          <Card.Img variant="top" src={service.picture} />
                          <Card.Body>
                            <Card.Title className="titleStyle">{service.title}</Card.Title>
                            <Card.Title>Price: ${service.price}</Card.Title>
                            <Card.Text>{service.description.slice(0, 160)}</Card.Text> 
                            <NavLink to= {`/details/${service?.id}`}>
                                <button className="border rounded py-1 px-3" style={{background: 'rgb(21, 163, 173)', color:'white'}}>Details</button>
                            </NavLink>
                          </Card.Body>
                        </Card>
                      </Col>)
                }
            </Row>
            </div>
        </div>
    );
};
/* 
<div className="border-3">
                        <Col className="w-75">
                            <img className="" src={service.picture} alt="" />
                            <h4>{service.title}</h4>
                        </Col>
                    </div>
*/
export default Services;