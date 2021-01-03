import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { API } from '../config/api';
import { CityContext } from '../context/City';

const RestaurantCard = (props) => {
    
    const {CityState} = useContext(CityContext)

    const rating =props.restaurant.user_rating.aggregate_rating;

    console.log(rating);

    let getCity=()=>{

        axios.get(`${API.zomato.baseUrl}/cities`,{
            headers:{
                'user-key' : API.zomato.api_key
            },
            params:{
                city_ids: props.city_id
            }
        })
        .then(({data})=>{
            
            CityState.setSelectedCity(data.location_suggestions[0])
            
        })
        .catch(err => console.log(err));
    };

    useEffect(()=>{
        getCity();
    },[])

    return (
        <>
            <div class="col-xl-4 col-md-6 col-12">
                <div class="product-item">
                    <div class="product-thumb">
                        <img src={props.restaurant.thumb} alt="Restaurant Image" />
                        <div class="product-action-link">
                            <Link to={`/restaurant_detail/${props.restaurant.id}`}><i class="icofont-eye"></i></Link>
                        </div>
                    </div>
                    <div class="product-content">
                        <div class="product-title">
                            <span class="cat-name"> <Link to={`restaurant_detail/${props.restaurant.id}`}><h5 style={{color:"#D60231"}}>{props.restaurant.name}</h5></Link></span>
                                <h6>{props.restaurant.location.address}</h6>
                                    <div class="rating">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span> ({props.restaurant.user_rating.aggregate_rating})</span>
                                        
                                    </div>

                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default RestaurantCard;