import React, { Component } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import FamousCity from './../Components/FamousCity';

class Home extends Component{

    render(){
        return (
            <>
                <Navbar />
                <Welcome/>
                <FamousCity/>  
                <Footer/>
                
            </>
        );
    }
}

export default Home;