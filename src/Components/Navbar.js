import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../bg-image/logo.png';

function Navbar(props) {
    return (
        <>
            <div className="mobile-menu">
                <nav className="mobile-header">
                    <div className="header-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <nav className="mobile-menu">
                    <div className="mobile-menu-area">
                        <div className="mobile-menu-area-inner">
                            <ul>
                                <li> <NavLink exact activeClassName="active-nav" to="/">Home</NavLink> </li>
                                <li><NavLink activeClassName="active-nav" exact to="/City">Search City</NavLink></li> 
                                <li><NavLink activeClassName="active-nav" exact to="/About">About</NavLink></li> 
                                <li><NavLink activeClassName="active-nav" exact to="/Contact">Contact</NavLink></li> 
                            </ul>
                        </div>
                    </div>
                </nav>
		</div>
        <header className="header-section">
			<div className="header-area">
                <div className="header-top">
                    <div className="container">
                        <div className="top">
                            <ul className="left">
                                <li>
                                    <i className="fas fa-globe-asia"></i>
                                    www.RestoFood@gmail.com
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Jl. Raya Babakan No.42,Babakan, Dramaga, Bogor
                                </li>
                                <li>
                                    <i className="fas fa-headset"></i>
                                    Support@RestoFood.com
                                </li>
                            </ul>
                            <ul className="right">
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                <li><a href="#"><i className="fas fa-futbol"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                <li><a href="#"><i className="fas fa-wifi"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="primary-menu">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="main-area">
                                <div className="main-menu">
                                    <ul>
                                        <li> <NavLink exact activeClassName="active-nav" to="/">Home</NavLink> </li>
                                        <li><NavLink activeClassName="active-nav" exact to="/City">Search City</NavLink></li> 
                                        <li><NavLink activeClassName="active-nav" exact to="/About">About</NavLink></li> 
                                        <li><NavLink activeClassName="active-nav" exact to="/Contact">Contact</NavLink></li> 
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</header>
       
        </>
    );
}

export default Navbar;