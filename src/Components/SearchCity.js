import React, { useContext, useState } from 'react';
import axios from 'axios';
import { CityContext } from '../context/City';
import { API } from './../config/api';


function SearchCity(props) {

    const [keyword,setKeyword] = useState('');

    const [CityResponseSearch,setCityResponseSearch] = useState([]);
    const {CityState} = useContext(CityContext);
  

   let searchHandle= async(e)=>{
       e.preventDefault();
       
       let keywords=keyword;
       
       try { 
        let response = await axios.get(`${API.zomato.baseUrl}/cities`,{
            headers:{
            'user-key' : API.zomato.api_key
            },
            params :{
                q: keywords
            }
        });
        CityState.setCity(response.data.location_suggestions);
        setKeyword('');
       }catch (e) {
           console.log(e.message);
           CityState.setNotfound("true");
       
       }


    }


    return (
        <>
            <div className="shop-title">
                <form className="form-flex" onSubmit={searchHandle}>
                    <div className="form-input form-col-8">
                        <input type="text" className="btn-search" value="search here" value={keyword} onChange={(e)=> setKeyword(e.target.value)} />
                    </div>
                    <div className="form-input form-col-2">
                        <button type="submit" className="food-btn style-2"><span><i className="icofont-search-2 pr-2"></i>Search City</span></button>
                    </div>
                </form>
            </div>
            
   
        </>
    );
}

export default SearchCity;