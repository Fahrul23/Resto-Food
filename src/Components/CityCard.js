import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchContext } from '../context/City';
import SearchCity from './SearchCity';

function CityCard(props) {

  
    return (
        <>
            {
                    props.city.map(city => {
                        return(
                            <div class="col-xl-4 col-md-6 col-12" key={city.id}>
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src="assets/images/city.jpg" alt="food-product"/>
                                            <span class="price"><i class="fas fa-map-marker-alt"></i></span>
                                    </div>
                                    <div class="product-content">
                                    <h5><a href="#">{city.name}</a></h5>
                                        <div class="rating mb-4">
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                        </div>
                                            <NavLink to={`city/${city.id}`} class="food-btn style-2"> <span>See Restourant </span></NavLink>
                                    </div>
                                </div> 
                            </div>
                        )
                    })
               
            }
               
        </>
    );
}

export default CityCard;