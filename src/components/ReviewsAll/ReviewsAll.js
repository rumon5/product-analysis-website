import React from 'react';
import useComment from '../UserComment/UserComment';

const ReviewsAll = () => {
    const [comments, setComments] = useComment();

    return (
        <div>

            {
                comments.map(comment => {
                    return <div className='user' key={comment.id}>
                        <div className='profile'></div>
                        <h4 className='mt-3'>{comment.rating}</h4>
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>

                    </div>
                })
            }
        </div>
    );
};

export default ReviewsAll;