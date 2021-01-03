import React from 'react';

import backround_1 from '../../src/bg-image/banner-bg.jpg';
import { Link } from 'react-router-dom';


function Welcome(props) {
    return (
        <>
         <section className="banner-area bg_size" style={{backgroundImage: `url(${backround_1})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="banner-content text-center">
                    <span>Welcome to our Resto-Food</span>
                    <h2>The Restaurant You Find</h2>
                    <h3>find a restaurant in your city</h3>
                    <div className="banner-btn-group">
                      
                    </div>
                </div>
            </div>
        </section>
        <div className="news_link">
            <div className="container">
                <div className="order-content">
                    <div className="content-logo">
                        <div className="product-thumb">
                            <h5 className="text-white">Good Restaurant For Good Helts</h5>                             
                        </div>
                       
                    </div>
                    <div className="content-link">
                        <ul>
                            <li>
                                <h5>find a restaurant near you</h5>
                            </li>
                            <li>
                                <Link to="/city" className="food-btn style-2"><span>Find Now</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
           
        </>
    );
}

export default Welcome;