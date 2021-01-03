import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CityContext } from '../context/City';

const RestaurantProfil = (props) => {

    
    const {CityState} = useContext(CityContext)


    return (
        <>
        <div className="shop-page single padding-tb pb-0">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-12">
                            <article>
                                <div className="shop-single">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 col-12">
                                            <div className="swiper-container gallery-top">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="shop-item">
                                                            <div className="shop-thumb">
                                                                <img src={props.restaurant.featured_image} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="shop-single-content">
                                                <div className="title">
                                                    <h5><a href="#">{props.restaurant.name}</a></h5>
                                                    <div className="p-food-group">
                                                        <span>Cuisines :{props.restaurant.cuisines}</span>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <span> 4.3 ({props.restaurant.all_reviews_count} Customer Reviews)</span>
                                                    </div>
                                                </div>
                                                <div className="desc">
                                                    <p>{props.restaurant.timings}</p>
                                                    
                                                    <ul>
                                                        <li>Address : {props.restaurant.location.address} </li>
                                                        <li>Locality : {props.restaurant.location.locality}</li>
                                                        
                                                    </ul>
                                                                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-xl-4 col-md-5 col-12">
                            <aside>
                                <div className="popular-chef-widget">
                                    <div className="food-quyality">
                                        <div className="section-header">
                                            
                                            <p><span>{props.restaurant.location.locality_verbose}</span></p>
                                        </div>
                                        <div className="section-wrapper">
                                            <p>Phone Number</p>
                                            <h5> {props.restaurant.phone_numbers}</h5>
                                            <hr/>
                                            <p>Cost Fot Two</p>
                                            <h5>{props.restaurant.currency} {props.restaurant.average_cost_for_two}</h5>
                                        </div>
                                        <div className="section-wrapper">
                                            <Link to={`/city/${CityState.selectedcity.id}`} className="food-btn"><span>Back to Restaurant List</span></Link>

                                        </div>              
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        </>
    );
};

export default RestaurantProfil;