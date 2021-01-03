import React, { Component } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import PageHeader from './../Components/PageHeader';
import  axios  from 'axios';
import { withRouter } from 'react-router-dom';
import { API } from '../config/api';

class RestaurantDetail extends Component {

    constructor(){
        super();
        this.state={
            restaurant:null
        }
    }
    getRestaurantData = restaurant_id=>{
        let url= 'https://developers.zomato.com/api/v2.1/restaurant';

        
        axios.get(url,{
            headers:{
                'user-key' : API.zomato.api_key
            },
            params:{
                res_id: restaurant_id
            }
        })
        .then(({data})=>{
            this.setState({restaurant:data})
            console.log(this.state.restaurant);
            console.log({data})
            
        })
        .catch(err => console.log(err));    
    }

    componentDidMount(){
        let {params}=this.props.match;
        this.getRestaurantData(params.restaurant_id);
    }

    render(){
        return(
            <>        
            <Navbar />  
            <div className="shop-page single padding-tb pb-0">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-12">
                                <div className="shop-single">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 col-12">
                                            <div className="swiper-container gallery-top">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="shop-item">
                                                            <div className="shop-thumb">
                                                                <img src="assets/images/product/01.jpg" alt="shop-single" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="shop-single-content">
                                                <div className="title">
                                                    <h5><a href="#"></a></h5>
                                                    <div className="p-food-group">
                                                        <span>Cuisines :</span>
                                                        <a href="#">Western, Asian</a>
                                                    </div>
                                                    <div className="rating">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <span> 4.3 (2589 Customer Reviews)</span>
                                                    </div>
                                                </div>
                                                <div className="desc">
                                                    <p>I love cooks my friends and family Special expertse info Making Pitha local food and have passonate to produce promote organic food...</p>
                                                    <ul>
                                                        <li>Location : Jl. Suryo No. 20, Senopati, Jakarta </li>
                                                        <li>Locality : Senopati, Jakarta</li>
                                                        <li>Phone Number : 021143242343</li>
                                                    </ul>
                                                                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-xl-4 col-md-5 col-12">
                            <aside>
                                <div className="popular-chef-widget">
                                    <div className="food-quyality">
                                        <div className="section-header">
                                             
                                            <p>Timings: <span>11 AM to 10 PM</span></p>
                                        </div>
                                        <div className="section-wrapper">
                                            <p>Cost</p>
                                            <h5>$35.00</h5>
                                            <hr/>
                                            <p>Cost Fot Two</p>
                                            <h5>$35.00</h5>
                                        </div>
                                        <div className="section-wrapper">
                                            
                                            <a href="#" className="food-btn"><span>Back to Home</span></a>
                                        </div>              
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="review single padding-tb">
            <div className="container">
                <div className="section-wrapper">
                    <div className="related">
                        <ul className="tab-bar">
                            <li className="tablinks btn-category text-center bg-dark text-white" id="defaultOpen" >
                                <span>Reviews</span>
                            </li>
                            
                        </ul>
                        <div id="four" className="tabcontent">
                            <div className="section-wrapper">
                                <div className="review">
                                    <ul className="content">
                                        <li>
                                            <div className="post-thumb">
                                                <img src="assets/images/clients/01.jpg" alt="shop" />
                                            </div>
                                            <div className="post-content">
                                                <div className="content-area">
                                                    <div className="entry-meta">
                                                        <div className="posted-on">
                                                            <a href="#">Britney Doe</a>
                                                            <p>Posted on December 25, 2017 at 6:57 am</p>
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
                                                        <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-thumb">
                                                <img src="assets/images/clients/03.jpg" alt="shop" />
                                            </div>
                                            <div className="post-content">
                                                <div className="entry-meta">
                                                    <div className="posted-on">
                                                        <a href="#">Jonathan Doe</a>
                                                        <p>Posted on December 25, 2017 at 6:57 am</p>
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
                                                    <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-thumb">
                                                <img src="assets/images/clients/02.jpg" alt="shop" />
                                            </div>
                                            <div className="post-content">
                                                <div className="entry-meta">
                                                    <div className="posted-on">
                                                        <a href="#">Mack Zucky</a>
                                                        <p>Posted on December 25, 2017 at 6:57 am</p>
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
                                                    <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-thumb">
                                                <img src="assets/images/clients/03.jpg" alt="shop" />
                                            </div>
                                            <div className="post-content">
                                                <div className="entry-meta">
                                                    <div className="posted-on">
                                                        <a href="#">Jordi Albae</a>
                                                        <p>Posted on December 25, 2017 at 6:57 am</p>
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
                                                    <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
            <Footer />
            </>
        )
    }
};

export default RestaurantDetail;