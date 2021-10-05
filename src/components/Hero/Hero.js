import React from 'react';
import { NavLink } from 'react-router-dom';
import bgimage from '../../images/hero.jpg';

const Hero = () => {
    return (
        <div style={{background: `url(${bgimage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '450px', opacity: '0.95', }}>
            <div className="py-5 text-white align-middle">
                <h1 className="mt-3 pt-4" style={{fontSize: '58px',}}>Empower YourSelf</h1>
                <p className="fs-5">WWE empowers international students and professionals to reach their goals in U.S. and Canada. <br /> WES has provided over 1.5 million evaluations to international students and professionals.</p>
                <NavLink to= "/contact">
                    <button className="border-info rounded py-2 px-5 mt-3 fs-5" >Know More</button>
                </NavLink>
                
            </div>
        </div>
    );
};

export default Hero;