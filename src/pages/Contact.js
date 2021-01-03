import React, { Component } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import PageHeader from '../Components/PageHeader';
import Swal from "sweetalert2";  


export default class Contact extends Component{
    
    HandleClickSend() {  
        Swal.fire({  
            position: 'top-end',  
            icon: 'success',  
            title: 'Tthanks for the message',  
            showConfirmButton: false,  
            timer: 3000  
        });  
    }   
    render(){
        return (
            <>
                <Navbar />
                <PageHeader title="Contact Us" />
                    <section class="contact-information padding-tb pb-xl-0">
                    <div class="container">
                        <div class="section-wrapper">
                            <div class="row">
                                <div class="col-lg-6 col-12">
                                    <h5>Contact Information</h5>
                                    <div class="post-item">
                                        <div class="post-content">
                                            <h6>adress</h6>
                                            <p>Jl. Raya Babakan No.42,Babakan, Dramaga, Bogor</p>
                                        
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-content">
                                            <h6>phone number : </h6>
                                            <p>+8801678170593, 01919-264687</p>
                                            <p>02-9611936</p>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-content">
                                            <h6>email adress : </h6>
                                            <p>RestoFood@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-content">
                                            <h6>website adress</h6>
                                            <p>http://Resto-Food.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-12">
                                    <h5>Send Us A Message</h5>
                                    <form class="d-flex flex-wrap justify-content-between">
                                        <input type="text" placeholder="Your Name" />
                                        <input type="text" placeholder="Your Email" />
                                        <input class="w-100" type="text" placeholder="Subject" />
                                        <textarea rows="8" placeholder="Your Message"></textarea>
                                        <button onClick={this.HandleClickSend} class="food-btn style-2"><span>Submit Message</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}
