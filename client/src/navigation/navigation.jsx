import React, { useState, useContext, Fragment } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

import AppContext from '../app/AppContext';

import './navigation.css'

const Navigation = () => {
    const [isOpened, setIsOpened] = useState(false);
    const toggleCollapse = () => setIsOpened(!isOpened);
    const appContext = useContext(AppContext);

    return (
        <MDBNavbar color="primary-color-dark" dark expand="md">
            <MDBNavbarBrand>
                    <MDBNavLink to="/">
                        <img src="https://us.sunpower.com/sites/default/files/icon-house-panel-2color_0.png" className="img-fluid" alt={`Responsive`} style={{ maxWidth: "10%" }} />
                    </MDBNavLink>
            </MDBNavbarBrand>

            <MDBNavbarToggler onClick={toggleCollapse} />

            <MDBCollapse id="navbarCollapse3" isOpen={isOpened} navbar>
                <MDBNavbarNav right>

                    {
                        appContext.isLoggedIn ? (
                            <Fragment>
                                <MDBNavItem>
                                    <MDBNavLink to="/projects">Projects</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink to="/project/create">Add projects</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink to="/" onClick={() => appContext.logoutUser()}>Logout</MDBNavLink>
                                </MDBNavItem>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <MDBNavItem>
                                    <MDBNavLink to="/register">Register</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink to="/login">Login</MDBNavLink>
                                </MDBNavItem>
                            </Fragment>
                        )
                    }

                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
};

export default Navigation;