import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import PageHeader from '../Components/PageHeader';
import Navbar from './../Components/Navbar';

class About extends Component{
    
    render(){
        return (
            <>
              <Navbar />
              <PageHeader title="About Us" />
                <section class="about padding-tb">
                    <div class="container">
                        <div class="row align-items-center flex-row-reverse">
                            <div class="col-lg-6 col-12">
                                <div class="about-thumb">
                                    <img src="assets/images/about/01.png" alt="about-food" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="about-content">
                                    <div class="section-header">
                                        <span>Welcome Resto-Food</span>
                                        <h3>Find Restaurant Near You</h3>
                                    </div>
                                    <div class="section-wrapper">
                                        <p>resto-food is a website-based application that encourages the feature to search for restaurants based on the city you are looking for. here you can also find restaurants in your city is located so it makes it easier if you are in need of a restaurant reference that has your dean </p>
                                        
                                        <Link  to="city" class="food-btn style-2"><span>Find Now</span> </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        
              <Footer/>   
            </>
        );
    }
}

export default About;