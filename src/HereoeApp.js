import React, { useReducer, useEffect } from 'react';
import AppRouter from './routers/AppRouter';
import { AuthContext } from './components/auth/AuthContext';
import { authReducer } from './components/auth/authReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const HereoeApp = () => {

    const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
        
        localStorage.setItem('user', JSON.stringify(user));
        
    }, [user])

    return (
        <AuthContext.Provider value={{ user, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>  
     );
}
 
export default HereoeApp;