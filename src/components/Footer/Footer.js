import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Card className="text-center" style={{background: 'rgb(37, 46, 51)', padding: '5px'}}>
                <Card.Footer className="text-white">Copyright &#169; 2021 ||  All right reserved by World Wide Education</Card.Footer>
            </Card>
        </div>
    );
};

export default Footer;