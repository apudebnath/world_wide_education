import React from 'react';
import conImg from '../../images/cont.jpg'
const Contact = () => {
    return (
        <div >
            <div className="d-flex">
                <div className="text-start m-5 pt-5">
                    <h2>Contact</h2>
                    <h2>Got a question about using World Wide Education?</h2>
                    <p>Pick from over 50,000 online video courses with new additions published every month.</p>
                    <button className="mt-3 py-2 px-3 rounded border" style={{background: 'rgb(21, 163, 173)', color:'white'}}>Help Center</button>
                </div>
                <div className="m-5">
                   <img className="rounded" src={conImg} alt="" />
                </div>
            </div>
            <div className="d-flex">
                <div className="m-5">
                    <img className="rounded" src={conImg} alt="" />
                </div>
                <div className="text-start m-5 pt-5">
                    <h2>London</h2>
                    <h2>Share your valuable experience with us</h2>
                    <p>Our mission is to democratize education through the offering of world-class higher education opportunities that are accessible, flexible, and economical. Virtually anyone on the planet with an internet connection and a commitment to self-empowerment through learning can come to Skillify.</p>
                    <button className="mt-3 py-2 px-3 rounded border" style={{background: 'rgb(21, 163, 173)', color:'white'}}>Help Center</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;