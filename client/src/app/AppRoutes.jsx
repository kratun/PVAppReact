import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import AppContext from './AppContext';
import NotFound from '../not-found';
import Home from '../home';
import Register from '../user/register';
import Login from '../user/login';

const PrivateRoute = ({
    component: Component,
    fallbackComponent: FallBackComponent,
    redirect = '/',
    allowed, ...rest
}) => {
    return (
        <Route
            {...rest}
            render={
                (props) => allowed ? (
                    <Component {...rest} {...props} />
                ) : (
                        FallBackComponent ? (<FallBackComponent />) : (<Redirect path="*" to={redirect} />)
                    )
            }
        />
    );
};


const AppRoutes = () => {
    
    const { isLoggedIn } = useContext(AppContext);

    return (
        
            <Switch>
                <Route path="/" exact component={Home} />
                
                {/* <PrivateRoute allowed={isLoggedIn} path="/projects" component={AllProjects} />
                <PrivateRoute allowed={isLoggedIn} path="/project/create" component={ProjectCreate} />
                <PrivateRoute allowed={isLoggedIn} path="/project/edit/:id" component={ProjectEdit} />
                <PrivateRoute allowed={isLoggedIn} path="/project/details/:id" component={ProjectDetails} /> */}

                <PrivateRoute allowed={!isLoggedIn} path="/register" component={Register} />
                <PrivateRoute allowed={!isLoggedIn} path="/login" component={Login} />

                <Route path="*" component={NotFound} />
            </Switch>
        
    );
};

export default AppRoutes;