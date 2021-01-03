import React, { Component } from 'react';
import Swal from "sweetalert2";  

import backround_4 from '../../src/bg-image/footer-bg.jpg';

export default class Footer extends Component{
   

    constructor() {  
        super();  
         
    }
    
    HandleClickSubscribe() {  
        Swal.fire({  
            position: 'top-end',  
            icon: 'success',  
            title: 'Thanks For Subscribe',  
            showConfirmButton: false,  
            timer: 2500  
        });  
    }    
    render(){
        return (
            <>
                <footer className="padding-tb"  style={{backgroundImage: `url(${backround_4})`}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="contant-info">
                                <h5>Contact info</h5>
                                <ul className="info">
                                    <li>
                                        <i className="fas fa-home"></i>
                                        <span>Jl.Raya Babakan No.42, Dramaga, Bogor</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <span>+880 1234 567890, 025984712</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-globe-asia"></i>
                                            <span>RestoFood@gmail.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-headphones"></i>
                                            <span>Support@RestoFood.com</span>
                                        </a>
                                    </li>
        
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="opening-time">
                                <h5>Support</h5>
                                <ul>
                                    <li>
                                        <p><i className="fab fa-twitter"></i>Twiter</p>
                                        <span>@RestoFood-97</span>
                                    </li>
                                    <li>
                                        <p><i className="fab fa-facebook"></i>Facebook</p>
                                        <span>Resto_Food</span>
                                    </li>
                                    <li>
                                        <p><i className="fab fa-youtube"></i>Youtube</p>
                                        <span>RestoFood Chanel</span>
                                    </li>
                                    <li>
                                        <p><i className="fab fa-instagram"></i>instagram</p>
                                        <span>@Resto-food</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="news_letter">
                                <h5>Subscribe Newsletter</h5>
                                <p>
                                    Sign Up For Our Latest News 
                                    We Wont Give You Spam Mails.
                                </p>
                                <div className="contact-search">
                                    <form className="searchForm" action="#">              
                                        <input className="searchTerm"  placeholder="Your Email" autocomplete="off" />
                                        <input type="submit" className="searchBtn" onClick={this.HandleClickSubscribe} value="Subscribe!"/> 
                                    </form> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="fotter-header">
                <header>
                    <div className="footer-bg">
                        <div className="container">
                            <div className="header-item ">
                                <div className="header-logo food-footer">
                                    <p className="text-center">Copyright  &copy; 2020<a href="index.html">Resto-Food</a></p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </header>
                 <div className="footer-bottom"></div> 
            </div>
          
            </>
        );    
    }
    
}
