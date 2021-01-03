import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../config/api';


function DetailRestaurant(props) {

    const[restaurant,setRestaurant]=useState([]);
    const {restaurant_id} = useParams();
    
    let getRestaurantData = restaurant_id=>{
        let url= `${API.zomato.baseUrl}/restaurant`;

        
        axios.get(url,{
            headers:{
                'user-key' : API.zomato.api_key
            },
            params:{
                res_id: restaurant_id
            }
        })
        .then(({data})=>{
            setRestaurant(data);
        })
        .catch(err => console.log(err));    
    }

   let get=()=>{
        console.log(restaurant);
    }


    useEffect(()=>{
        getRestaurantData(restaurant_id);
        get();

    },[])

    return (
        <div>
            <h1>Detail Restaurant</h1>
            {restaurant &&(
                        <div class="section-header">
                            <h5>Restaurant Category In {restaurant.name}</h5>
                        </div>
            )}
        </div>
    );
}

export default DetailRestaurant;