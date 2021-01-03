import React, { useContext, useState } from 'react';
import CityCard from '../Components/CityCard';
import Footer from '../Components/Footer';
import PageHeader from '../Components/PageHeader';
import SearchCity from '../Components/SearchCity';
import Navbar from './../Components/Navbar';
import { CityContext } from '../context/City';
import NotFound from '../Components/NotFound';


function CityList(props) {

    const {CityState} = useContext(CityContext)

    let city = [];

    city = CityState.city;

    return (
        <>
            <Navbar />  
            <PageHeader title="Search City"/>
            <div class="shop-page single padding-tb bg-fa">
                <div class="container">
                    <div class="section-wrapper">
                      <SearchCity />
                    </div>
                    <div class="shop-product-wrap grid row">
                    {
                        city.length > 0 ? <CityCard city={CityState.city}/> : <NotFound/>
                    }    
                    </div>
                    
                   
                </div>
            </div>
            <Footer/>


        </>
    );
}

export default CityList;