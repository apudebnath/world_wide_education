import React from 'react';
import './NotFound.css';
import imageNotFound from '../../images/notfound.jpg'
const NotFound = () => {
    return (
        <div>
            <div className="" style={{background: `url(${imageNotFound})`, backgroundRepeat: 'no-repeat', margin: 'auto', paddingTop: '40px'}}>
                <h1 className="pt-5 mt-5">404!</h1>
                <p>
                    The Page you are looking for is NOT AVAILABLE!!!
                </p>
            </div>
        </div>
    );
};

export default NotFound;