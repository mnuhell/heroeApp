import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'

const LoginScreen = ( { history } ) => {

    const {dispatch} = useContext(AuthContext)
    
    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                nombre: 'Fernando'
            }
        });

        history.replace(lastPath);
    }
     
    return (
        <div className="container">
            <h3>Login Screen</h3>
            <hr />
            <button className="btn btn-primary" 
            onClick={handleLogin}
            > Login </button>
        </div>
    )
}


export default LoginScreen;