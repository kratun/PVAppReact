import React from 'react';

import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { AppProvider, appContextInitialState } from './AppContext';

import AppRoutes from './AppRoutes';
import Navigation from '../navigation/navigation';

import { hasTokenSet } from '../services/auth-service';

const App = () => {
  const isLoggedin = hasTokenSet();
  const initialState = { ...appContextInitialState, isLoggedin };
  
  return (
    <div className="App">
      <AppProvider value={initialState}>
          <Navigation />
          <AppRoutes />
          <footer>FOOTER</footer>
      </AppProvider>
    </div>
  );
}

export default App;
