import React from 'react';
import './Reviews.css'

const Review = ({ comments }) => {

    return (

        <>
            {
                comments.slice(0, 3).map(comment => {
                    return <div key={comment.id} className='user'>
                        <div className='profile'></div>
                        <h4 className='mt-3'>{comment.rating}</h4>
                        <h3>{comment.name}</h3>
                        <p>{comment.body}</p>
                    </div>
                })
            }
        </>
    );
};

export default Review;