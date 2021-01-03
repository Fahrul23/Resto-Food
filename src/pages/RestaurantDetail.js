import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import PageHeader from "../Components/PageHeader";
import Review from "../Components/Review";
import { API } from "../config/api";
import RestaurantProfil from './../Components/RestaurantProfil';



function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState();
  const[reviews,setReviews]=useState();
  const {restaurant_id}=useParams();

    

  let getRestaurantData = () => {
    
    let url= `${API.zomato.baseUrl}/restaurant`;

    
    Axios.get(url, {
      headers: {
        "user-key": API.zomato.api_key
      },
      params: {
        res_id: restaurant_id
      }
    })
      .then(({ data }) => {
        setRestaurant(data);
      })
      .catch((err) => console.log(err));
  };
  
  let getReviewData = () => {
    
    let url= `${API.zomato.baseUrl}/reviews`;

    
    Axios.get(url, {
      headers: {
        "user-key": API.zomato.api_key
      },
      params: {
        res_id: restaurant_id
      }
    })
      .then(({ data }) => {
        setReviews(data.user_reviews);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRestaurantData();
    getReviewData();
  }, []);

  return (
    
    <>
    
     <Navbar />  
     <PageHeader title="Restaurant Detail" />
      {restaurant ? 
        <RestaurantProfil restaurant={restaurant}/>

      : <p>Loading ... </p>}
      {reviews ? 
        <div>
              <div className="review single padding-tb">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="related">
                                <ul className="tab-bar">
                                    <li className="btn-search bg-dark text-white text-center" id="defaultOpen" onclick="openCity(event, 'four')">
                                        <span>Reviews</span>
                                    </li>
                                </ul>
                            {
                                reviews.map(review => (
                                    <Review review={review} />
                                    
                                ))
            
                            }
                            </div>
                        </div>
                    </div>
                </div>                    
                


        </div>

      : <p>Loading ... </p>}
    </>
  );
}
export default RestaurantDetail;
