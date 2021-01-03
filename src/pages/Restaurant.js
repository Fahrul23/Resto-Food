import React, { Component, useContext } from 'react';
import Footer from '../Components/Footer';
import PageHeader from '../Components/PageHeader';
import Navbar from './../Components/Navbar';
import { withRouter } from 'react-router-dom';
import { API } from '../config/api';
import Axios from 'axios';
import '../style/mycss.css';
import CategoryList from '../Components/CategoryList';
import SearchKeyword from '../Components/SearchKeyword';
import SearchCriteria from '../Components/SearchCriteria';
import RestaurantCard from '../Components/RestaurantCard';


class Restaurant extends Component{

    constructor(){
        super();
        this.state={
            city:null,
            categories:null,
            categorySelected:null,
            keyword:"",
            criteria:[],
            restaurants:[]
        };
    }


    searchHandler=()=>{
        this.setState({restaurants:null})
        let url= `${API.zomato.baseUrl}/search`
        let params = {}

        for(let cri of this.state.criteria){
            switch(cri.criteriaName){
                case 'city':
                    params.entity_id = cri.data.id
                    params.entity_type = 'city'
                    break;
                case 'category':
                    params.category =cri.data.id
                    break;
                case 'keyword':
                    params.q=cri.data.name
                    break;
                default:break;
            }
        }
        Axios.get(url,{
            headers:{
                'user-key' : API.zomato.api_key
            },
            params
         })
        .then(({data})=>{
            this.setState({restaurants: data.restaurants})
        })
        .catch(err => console.log(err));

    }

    renderRestaurantList=() =>{
        let {city_id} = this.props.match.params
        if(this.state.restaurants === null){
            return(
                <div className="col">
                    <p>Loading . . .</p>
                </div>
            )
        }
        if(this.state.restaurants.length > 0){
            return(
                this.state.restaurants.map(({restaurant}) =>(
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} city_id={city_id}/>
                ))
            )
        }else{
            return(
                <div className="col">
                    <p>No Data Available. Please select Criteria, and click search</p>
                </div>
            )
        }
    }


    
    transformCategoriesData = categories=>{
        let categoriesTransformed = categories.map(category =>{
            return category.categories;
        })
        return categoriesTransformed;
    }

    getCityData=(city_id)=>{

        Axios.get(`${API.zomato.baseUrl}/cities`,{
            headers:{
                'user-key' : API.zomato.api_key
            },
            params:{
                city_ids: `${city_id}`
            }
        })
        .then(({data})=>{
            let city =data.location_suggestions[0]
            
            let newCriteria={
                criteriaName: 'city',
                data:city
            }

            let criteria = [...this.state.criteria]
            criteria.push(newCriteria);

            this.setState({city,criteria});
        

            
            
        })
        .catch(err => console.log(err));
    };

    getCategoryData=()=>{
        Axios.get(`${API.zomato.baseUrl}/categories`,{
            headers:{
                'user-key' : API.zomato.api_key
            }
        })
        .then(({data})=>{
            let category=this.transformCategoriesData(data.categories);
        
            this.setState({categories:category});
        
        })
        .catch(err => console.log(err));
        
        
    }
    categoryClickHandler= category =>{
        let criteria=[...this.state.criteria]

        criteria = criteria.filter(cri => cri.criteriaName !== "category")

        let newCriteria = {
            criteriaName:'category',
            data:category
        }
        criteria.push(newCriteria);

        this.setState({categorySelected:category,criteria})
        
    }
    changeKeywordHandler=(event) =>{
        this.setState({keyword : event.target.value})
    }


    componentDidMount(){
        let {city_id} = this.props.match.params
        this.getCityData(city_id);
        this.getCategoryData();
    
        
    }

    addToCriteriahandler=()=>{
        let criteria=[...this.state.criteria]
        criteria= criteria.filter(cri => cri.criteriaName !== "keyword")
        let newCriteria={
            criteriaName:'keyword',
            data:{
                name:this.state.keyword
            }
        }
        criteria.push(newCriteria);
        this.setState({keyword:"",criteria});
        
    }
    removeCriteriaHandler=index=>{
        let criteria = [...this.state.criteria];
        criteria.splice(index,1);
        this.setState({criteria});
    }





    render(){
        return(
            <>
                <Navbar />  
                <PageHeader title="Restaurant"/>
                <section className="shop-page single padding-tb bg-fa padding-tb">
                    <div className="container">
                        <div className="row">
                            <CategoryList 
                            city={this.state.city}
                            categories={this.state.categories}
                            categorySelected={this.state.categorySelected}
                            categoryClickHandler={(category) => this.categoryClickHandler(category)}
                            />
                            <div class="col-lg-9">
                                <div>
                                    <div class="container">
                                        <div class="section-wrapper">
                                            <SearchKeyword 
                                                onClickAddToCriteria={this.addToCriteriahandler}
                                                keyword={this.state.keyword}
                                                changeKeywordHandler={this.changeKeywordHandler}

                                            />
                                            <SearchCriteria
                                                criteria={this.state.criteria}
                                                removeCriteriaHandler={(index) => this.removeCriteriaHandler(index)}
                                                onClickSearch={this.searchHandler}
                                            />
                                            <div className="pb-2">
                                                <h6 style={{color:"#D60231"}}>Restaurant List</h6>
                                            </div>
                                            <div class="shop-product-wrap grid row">
                                                {this.renderRestaurantList()}
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

export default withRouter(Restaurant);