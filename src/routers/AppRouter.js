import React, { useContext } from 'react';
import LoginScreen from '../components/login/LoginScreen';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import RouteWithSubRoutes from './RouteWithSubRoutes';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from '../components/auth/AuthContext';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
      
        <Router>

        <Switch>
          <PublicRoute  
          exact 
          path="/login" 
          component={ LoginScreen } 
          isAuthenticated={user.logged} />

          <PrivateRoute path="/" component={ RouteWithSubRoutes } isAuthenticated={ user.logged } />
          
        </Switch>
    </Router>
    )
}

export default AppRouter;