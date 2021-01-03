import React from 'react';



const DetailRestaurantContent = (props) => {

    let data=props.restaurant;
    
    return (
    
    <div className="App">
      <h1>Learn React</h1>
      {props.restaurant ? (<p>{data.map(res => (<p key={res.id}>{res.name}</p>))}</p>) : <p>Gagal</p>}
    </div>
    );
};

export default DetailRestaurantContent;