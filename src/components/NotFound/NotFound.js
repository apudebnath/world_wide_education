import React from 'react';
import './NotFound.css';
import imageNotFound from '../../images/notfound.jpg'
const NotFound = () => {
    return (
        <div>
            <div className="my-5">
                <div c>
                    <img src={imageNotFound} alt="" />
                </div>
                <h1 className="pt-5">404!</h1>
                <p>
                    The Page you are looking for is NOT AVAILABLE!!! <br /> Please Try again ....
                </p>
            </div>
        </div>
    );
};

export default NotFound;