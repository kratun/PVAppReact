import React, { useContext } from 'react';
import { Route, Redirect, Switch, BrowserRouter} from 'react-router-dom'

import AppContext from './AppContext';
import NotFound from '../not-found';
import Home from '../home';
import Register from '../user/register';
import Login from '../user/login';
import ProjectCreate from '../pages/projects/project-create'
import AllProjects from '../pages/projects/all-projects'
import ProjectEdit from '../pages/projects/project-edit'
import ProjectDetails from '../pages/projects/project-details'
import Calculator from '../pages/calculator/calculation'
// import CalculatorInput from '../components/calculator/inputs'
// import CalculatorResult from '../components/calculator/result'

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
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                
                <PrivateRoute allowed={isLoggedIn} path="/projects" component={AllProjects} />
                <PrivateRoute allowed={isLoggedIn} path="/project/create" component={ProjectCreate} />
                <PrivateRoute allowed={isLoggedIn} path="/project/edit/:id" component={ProjectEdit} />
                <PrivateRoute allowed={isLoggedIn} path="/project/details/:id" component={ProjectDetails} />
                <PrivateRoute allowed={isLoggedIn} path="/calculator" component={Calculator} />
                
                <PrivateRoute allowed={!isLoggedIn} path="/register" component={Register} />
                <PrivateRoute allowed={!isLoggedIn} path="/login" component={Login} />

                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRoutes;