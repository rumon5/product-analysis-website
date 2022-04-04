import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../images/as.jpg'
import Review from '../Review/Reviews';
import useComment from '../UserComment/UserComment';
import './Home.css'


const Home = () => {
    const [comments, setComments] = useComment();
    const navigate = useNavigate();

    return (
        <>
            <div className='product-container'>
                <div>
                    <img src={Image} alt="" />
                </div>
                <div>
                    <h2>MSI GF63 THIN 11SC Core i5 11th Gen GTX 1650 4GB Graphics 15.6" FHD 144hz Gaming Laptop</h2>
                    <h3>Key Features</h3>
                    <p>Model: GF63 THIN 11SC</p>
                    <p>Intel Core i5-11400H Processor (12M Cache, 2.70 GHz up to 4.50 GHz)</p>
                    <p>8GB DDR4 3200MHz RAM</p>
                    <p>512GB NVMe PCIe Gen3x4 SSD</p>
                    <p>NVIDIA GTX 1650 4GB GDDR6 Graphics</p>
                    <h3>Price: $ 900</h3>
                    <button className='buy-now-btn'>Buy Now</button>

                </div>
            </div>
            <div className="customer-review">
                <h1 className='review-title'>Customer Reviews (3)</h1>
                <div>

                    <Review comments={comments}></Review>)

                </div>
                <button onClick={() => navigate('/reviews')} >See All Reviews</button>
            </div>
        </>
    );
};

export default Home;