import React from 'react';

const CategoryList=(props) => (
            <div className="col-lg-3">
                <div className="filter-content">
                    
                   {props.city &&(
                        <div className="section-header category-header">
                            <h5>Restaurant Category In {props.city.name} </h5>
                        </div>
                    )}
                    
                    {props.categories ? (
                        <div>
                            {props.categories.map(category =>
                                <button
                                    key={category.id} 
                                    className={"food-btn btn-category mb-2 pb-2 pt-2" + (props.categorySelected && props.categorySelected.id === category.id ? " btn-active" : '')}
                                    onClick={()=>props.categoryClickHandler(category)}
                                >
                                    <span>{category.name}</span>
                                </button>
                            )}
                        </div>
                    ) : (<p>Loading ...</p>)}
                                    
                </div>
            </div>
        
)

export default CategoryList;