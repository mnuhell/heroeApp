import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useForm } from '../hooks/useForm';
import { types } from '../types/types';


const LoginScreen = ( { history } ) => {

    const {dispatch} = useContext(AuthContext);

    const [ values, handleInputChange, reset ] = useForm();

    const { user } = values;
    
    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                nombre: user
            }
        });

        history.replace(lastPath);
    }

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center'
    }
     
    return (
        
        <div className="container container-login col-5" style={ style }>
        <div>
            <h3>Login Screen</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="user"  placeholder="Usuario" aria-describedby="user" name="user" onChange={handleInputChange} />
                    <small id="username" className="form-text text-muted">Únicamente guardamos en el localStorage</small>
                </div>
                <button className="btn btn-primary" 
                        onClick={handleLogin}
                        > Login </button>
            </form>
            </div>
        </div>
    )
}


export default LoginScreen;