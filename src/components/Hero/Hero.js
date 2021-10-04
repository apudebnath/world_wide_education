import React from 'react';
import { Card } from 'react-bootstrap';
import bgimage from '../../images/hero.jpg';

const Hero = () => {
    return (
        <div style={{background: `url(${bgimage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '450px', opacity: '0.95', }}>
            <div className="py-5 text-white align-middle">
                <h1 className="fs-1 pt-5">Empower YourSelf</h1>
                <p className="fs-5">WWEempowers international students and professionals to reach their goals in U.S. and Canada. <br /> WES has provided over 1.5 million evaluations to international students and professionals.</p>
                <button className="border rounded mt-3">Know More</button>
            </div>
            {/* <div className="row">
            <Card className="bg-dark text-white h-100">
  <Card.Img src="../../images/hero.jpg" alt="" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
            </div> */}
        </div>
    );
};

export default Hero;