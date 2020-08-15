import React, { createContext, useState, useEffect } from 'react';
import { login, logout, hasTokenSet } from '../services/auth-service';

export const appContextInitialState = {
    isLoggedin: false
};

const AppContext = createContext(appContextInitialState);

export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const hasToken = hasTokenSet();

        setIsLoggedIn(hasToken);
    }, []);

    const loginUser = async (email, password) => {
        const data = await login(email, password);
        if(data.error){
            setIsLoggedIn(false);
            
        }else{
            setIsLoggedIn(true);
        }
    };
    
    const logoutUser = () => {
        logout();
        setIsLoggedIn(false);
    };
    const contextApi = { loginUser, logoutUser, isLoggedIn };

    return (
        <AppContext.Provider value={contextApi}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;