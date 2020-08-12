import React from 'react';

import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { AppProvider, appContextInitialState } from './AppContext';

import AppRoutes from './AppRoutes';

import { hasTokenSet } from '../services/auth-service';

const App = () => {
  const isLoggedin = hasTokenSet();
  const initialState = { ...appContextInitialState, isLoggedin };
  
  return (
    <div className="App">
      <AppProvider value={initialState}>
          
          <AppRoutes />
          
      </AppProvider>
    </div>
  );
}

export default App;
