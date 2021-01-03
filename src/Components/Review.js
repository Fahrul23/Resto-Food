import React from 'react';

const Review = (props) => {
    return (
        <div id="four" className="tabcontent">
            <div className="section-wrapper">
                <div className="review">
                    <ul className="content">
                        <li >
                            <div className="post-thumb">
                                <img src={props.review.review.user.profile_image} alt="shop" />
                            </div>
                            <div className="post-content">
                                <div className="content-area">
                                    <div className="entry-meta">
                                        <div className="posted-on">
                                            <a href="#">{props.review.review.user.name}</a>
                                            <p>Posted on {props.review.review.review_time_friendly}</p>
                                        </div>
                                        <div className="rating">
                                            <i className="icofont-star"></i>
                                            <i className="icofont-star"></i>
                                            <i className="icofont-star"></i>
                                            <i className="icofont-star"></i>
                                            <i className="icofont-star"></i>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>{props.review.review.review_text}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Review;