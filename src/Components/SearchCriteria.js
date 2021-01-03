import React from 'react';

const SearchCriteria = (props) => {
    return (
        <>
            <div class="shop-title d-flex flex-wrap justify-content-between">
                <div class="col-lg-12 pb-3">
                    <span>Find Restaurants based on criteria</span>
                </div>
                <div class="col-lg-12">
                    <table class="table table-dark">
                        <tbody>
                            {props.criteria.map((cri,index)=>(
                                <tr class="bg-dark"  key={index}>
                                    <td>{cri.criteriaName}</td>
                                    <td>{cri.data.name}</td>
                                    <td>
                                        {cri.criteriaName !== "city" &&(
                                        
                                            <span><i
                                            className="fa fa-times" 
                                            aria-hidden="true"
                                            onClick={() => props.removeCriteriaHandler(index)}
                                            style={{color:"#D60231"}}
                                            >
                                            </i></span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>   
                </div>
                <div class="col-lg-12">
                    <button href="#" onClick={props.onClickSearch} class="food-btn style-2 float-right" ><span><i class="icofont-search-2 pr-2"></i>Search</span></button>                              
                </div>
            </div>
        </>
    );
};

export default SearchCriteria;