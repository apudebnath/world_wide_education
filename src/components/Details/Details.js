import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import img from '../../images/details.jpg';

const Details = () => {
    const{id} = useParams();
    const [details, setDetails] = useState([]);
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/apudebnath/data-json/main/jsonData.js')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, []);
       console.log(details);

    useEffect(() =>{
        const info = details.find(detail => detail.id ===id)
        console.log(info)
    }, [details])
    return (
        <div>
            <h3>{id}</h3>
            <img className="img-fluid w-100" src={img} alt="" />
        </div>
    );
};

export default Details;