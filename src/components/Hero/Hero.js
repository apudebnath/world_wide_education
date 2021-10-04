import React from 'react';
import bgimage from '../../images/hero.jpg';

const Hero = () => {
    return (
        <div style={{background: `url(${bgimage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '450px', opacity: '0.95', }}>
            <div className="py-5 text-white align-middle">
                <h1 className="mt-3 pt-5" style={{fontSize: '58px',}}>Empower YourSelf</h1>
                <p className="fs-5">WWEempowers international students and professionals to reach their goals in U.S. and Canada. <br /> WES has provided over 1.5 million evaluations to international students and professionals.</p>
                <button className="border rounded mt-3 py-2 px-4 fs-5">Know More</button>
            </div>
        </div>
    );
};

export default Hero;