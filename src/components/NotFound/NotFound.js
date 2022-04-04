import React from 'react';
import Image from '../../images/404.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-cont'>
            <img src={Image} alt="" />
        </div>
    );
};

export default NotFound;