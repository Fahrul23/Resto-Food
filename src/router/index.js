import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './../pages/Home';
import CityList from './../pages/CityList';
import {SearchProvider} from '../context/City';
import City from '../Components/City';
import Restaurant from '../pages/Restaurant';
import RestaurantDetail from './../pages/RestaurantDetail';
import About from './../pages/About';
import Alert from './../Components/Alert';
import Contact from './../pages/Contact';

function Router() {
    return (
        <>
            <Switch>
                <SearchProvider>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/city">
                        <CityList />
                    </Route>
                    
                    <Route exact path="/alert">
                        <Alert />
                    </Route>
                    
                    <Route exact path="/Contact">
                        <Contact />
                    </Route>
                    
                    <Route exact path="/About">
                        <About />
                    </Route>
                    <Route path="/restaurant_detail/:restaurant_id">
                        <RestaurantDetail />
                    </Route>
                    <Route path="/city/:city_id">
                        <Restaurant/>
                    </Route>
                </SearchProvider>
            </Switch>
        </>
    );
}

export default Router;