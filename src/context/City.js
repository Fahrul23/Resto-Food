import React, { createContext,useState} from 'react';

  
  const CityContext=createContext()

  const SearchProvider=(props)=>{

    const [city,setCity]=useState([]);  
    const [notfount,setNotfound]=useState("false");   
    const [selectedcity,setSelectedCity]=useState([])

    const CityState={
        city,setCity,notfount,setNotfound,selectedcity,setSelectedCity
    }
      return(
      <CityContext.Provider value={{CityState}}>
        {props.children}
      </CityContext.Provider>
      ) 

  }

export {CityContext,SearchProvider}