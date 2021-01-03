import React from 'react';

const SearchKeyword = (props) => {
    return (
        <>
            <div class="shop-title d-flex flex-wrap justify-content-between">
                <div class="col-lg-9 col-6">
                    <input type="text" class="btn-search" placeholder="Type Keyword i.e: restaurant's Name,Location,Cuisine, etc."
                        value={props.keyword}
                        onChange={props.changeKeywordHandler}
                    />
                </div>
                <div class="col-lg-3 col-6 ">
                    <div class="button-search">
                        <button onClick={props.onClickAddToCriteria} class="food-btn style-2"><span>Add Criteria</span></button>              
                    </div>                                            
                </div>
            </div>
        </>
    );
};

export default SearchKeyword;