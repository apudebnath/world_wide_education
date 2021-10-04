import React from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import './Home.css';

// context api
export const serviceContext = createContext('Our Courses');

const Home = () => {
    const [services, setServices] = useState([]);
    const homeServices= services.slice(0,4);
    // Get data from fakedata
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/apudebnath/data-json/main/jsonData.js`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <serviceContext.Provider value={services}>
        <div>
            <div>
                <Hero></Hero>
            </div>
            <h2 className="mt-5">Our Courses</h2>
            <div className="m-5">
            <Row xs={1} md={2} className="g-5 m-5">
            {
                homeServices.map(service => <Service 
                    key={service.id}
                    service={service}></Service>,
                    )
            } 
            </Row>
            </div>  
        </div>
        </serviceContext.Provider> 
    );
};

export default Home;