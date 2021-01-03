import React, { useContext, useEffect, useState } from 'react';

import backround_2 from '../../src/bg-image/product-bg.jpg';
import axios from 'axios';
import CityCard from './CityCard';
import { CityContext } from '../context/City';
import { API } from './../config/api';


function FamousCity(props) {

    const{CityState} = useContext(CityContext)    
    
    let getCity = async () =>{
        try {
            let response = await axios.get(`${API.zomato.baseUrl}/cities`,{
            headers:{
                'user-key' : API.zomato.api_key
            },
            params:{
                city_ids: '74,11052,170'
            }
        })
        CityState.setCity(response.data.location_suggestions);
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getCity()    
    },[]);

    return (
        <>
           <section class="product bg_size p-rel padding-tb" style={{backgroundImage: `url(${backround_2})`}}>
            <div class="overlay"></div>
            <div class="container">
                <div class="section-header">
                    <img src="assets/images/header/sc-img.png" alt="sc-img" class="header-img" />
                    <span>Famous City</span>
                    <h2>Restaurant With Special Foods of indonesian</h2>
                </div>
                <div class="section-wrapper">
                    <div class="row">
                        <CityCard city={CityState.city}/>
                        
                    </div>
                </div>
            </div>
        </section>
         
        </>
    );
}

export default FamousCity;