import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const{serviceId} = useParams();
    return (
        <div>
            <h2>Details</h2>
        </div>
    );
};

export default Details;