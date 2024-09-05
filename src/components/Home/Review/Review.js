import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css';

const Review = () => {
    const [reviewData, setReviewData] = useState({});
    
    return (
        <section className='review-container'>
            <h1 className='text-center py-5'>Baxtli <span>mijozlar</span>, Toza uylar</h1>
            <div className="review-card-container pb-5">
                {
                    reviewData.length && reviewData.map(singleReview => <ReviewCard key={singleReview._id} singleReview={singleReview}></ReviewCard>)
                }  
            </div>
        </section>
    );
};

export default Review;