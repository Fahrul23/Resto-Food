
import Axios from 'axios';
import React, { Component } from 'react';
import Category from './Category';
import CategoryList from './CategoryList';
import Footer from './Footer';
import Navbar from './Navbar';
import PageHeader from './PageHeader';
import SearchKeyword from './SearchKeyword';


const categoriesDumy = [
    {
        categories:{
            id : 1,
            name : "Delivery"
        }
    },
    {
        categories:{
            id : 2,
            name : "Dine-Out"
        }
    },
    {
        categories:{
            id : 1,
            name : "NightLife"
        }
    },
    {
        categories:{
            id : 1,
            name : "Catching-up"
        }
    },
]

class City extends Component{

    constructor(){
        super();
        this.state={
            city:null,
            categories:null,
            categorySelected:null,
            criteria:[]
        };
    }
    transformCategoriesData = categories=>{
        let categoriesTransformed = categories.map ( category =>{
            return category.categories;
        })
        return categoriesTransformed;
    }

    getCity=()=>{
        
        Axios.get('https://developers.zomato.com/api/v2.1/cities',{
            headers:{
                'user-key' : '37bf0689b727f6485a48de825cc5f78d'
            },
            params:{
                city_ids: 74
            }
        })
        .then(({data})=>{     
            let city = data.location_suggestions[0];
            
            let newCriteria={
                criteriaName:'City',
                data:city
            }

            let criteria =[...this.state.criteria];

            criteria.push(newCriteria);

            this.setState({city,criteria});
            
        console.log(this.state.categories);
        })
        .catch(err=> console.log(err));
    }

    componentDidMount(){
        this.getCity();
        let categories=this.transformCategoriesData(categoriesDumy);
        this.setState({categories});
        console.log(this.state.categories);

    }
    categoryClickHandler=category=>{
        this.setState({categorySelected:category})
    }

    render(){
        
        return(
            <>
            <Navbar />  
            <PageHeader />
                <section className="shop-page single padding-tb bg-fa padding-tb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="filter-content">
                                    <div className="section-header">
                                         <h5>Restaurant Category In {City.name}</h5>
                                    </div>
                                  
                                <Category category={this.state.categories}/>


                                </div>
                            </div>
                            <div className="col-lg-9">
                            
                                <div class="">
                                    <div class="container">
                                        <div class="section-wrapper">
                                            <SearchKeyword 
                                                keyword={this.state.keyword} 
                                                changeKeywordHandler={this.state.changeKeywordHandler}
                                            />
                                            <div className="shop-title d-flex flex-wrap justify-content-between">
                                                <div className="col-lg-12 pb-3">
                                                    <span>Find Restaurants based on criteria</span>
                                                </div>
                                                <div className="col-lg-12">
                                                    <table className="table table-dark">
                                                        <tbody>
                                                                {this.state.criteria.map((criteria,index)=>(
                                                                    <tr key={index}>
                                                                        <td>{criteria.criteriaName}</td>
                                                                    </tr>
                                                                ))}
                                                                    <tr  className="bg-dark">
                                                                      <td>adf</td>
                                                                      <td>daf</td>
                                                                      <td>
                                                                        x
                                                                      </td>  
                                                                    </tr>
                                                             
                                                        </tbody>
                                                    </table>   
                                                </div>
                                                <div className="col-lg-12">
                                                    <button href="#" className="food-btn style-2 float-right p-2" ><span><i className="icofont-search-2 pr-2"></i>Search</span></button>
                                                    
                                                </div>
                                            </div>
    
                                            <div className="shop-product-wrap grid row">
                                                <div className="col-xl-3 col-md-6 col-12">
                                                    <div className="product-item">
                                                        <div className="product-thumb">
                                                            <img src="assets/images/product/01.jpg" alt="food-product" />
                                                            <span className="price">$20</span>
                                                            <div className="product-action-link">
                                                                <a href="assets/images/product/01.jpg" data-rel="lightcase"><i className="icofont-eye"></i></a>
                                                                <a href="#"><i className="icofont-heart-alt"></i></a>
                                                                <a href="#"><i className="icofont-cart-alt"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <div className="product-title">
                                                                <span className="cat-name">Catagory Name</span>
                                                                <h6><a href="#">Cream Chicken Chiladas</a></h6>
                                                                <div className="rating">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-list-item">
                                                        <div className="product-thumb">
                                                            <img src="assets/images/product/01.jpg" alt="food-product" />
                                                            <div className="product-action-link">
                                                                <a href="assets/images/product/01.jpg" data-rel="lightcase"><i className="icofont-eye"></i></a>
                                                                <a href="#"><i className="icofont-heart-alt"></i></a>
                                                                <a href="#"><i className="icofont-cart-alt"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <div className="product-title">
                                                                <span className="cat-name">Catagory Name</span>
                                                                <h6><a href="#">Cream Chicken Chiladas</a></h6>
                                                                <span className="price">$20</span>
                                                                <div className="rating">
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                    <i className="icofont-star"></i>
                                                                </div>
                                                                <p>Assertively fabricate process-centric collaboration and idea-sharing whereas focused results. Energistically mesh clicks-and-mortar architectures with market-driven niche markets. Monotonectally redefine integrated technology for diverse intellectual capital. Energistically administrate principle-centered opportunities without customer.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                            
                                            <div className="paginations">
                                                <ul className="d-flex flex-wrap justify-content-center">
                                                    <li>
                                                        <a href="#">1</a>
                                                    </li>
                                                    <li className="d-none d-sm-block">
                                                        <a href="#">2</a>
                                                    </li>
                                                    <li className="d-none d-sm-block">
                                                        <a href="#">3</a>
                                                    </li>
                                                    <li>
                                                        <a className="dot">...</a>
                                                    </li>
                                                    <li className="d-none d-sm-block">
                                                        <a href="#">9</a>
                                                    </li>
                                                    <li className="d-none d-sm-block">
                                                        <a href="#">10</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">11</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
            <Footer />
            </>
            )
    }
}

export default City;