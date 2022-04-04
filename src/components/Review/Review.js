import React from 'react';
import './Reviews.css'

const Review = ({ comment }) => {
    const { name, body } = comment;
    return (
        <div className='user'>
            <div className='profile'></div>
            <h3>{name}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Review;