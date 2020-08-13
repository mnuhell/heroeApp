import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types';

export const NavBar = () => {

    const {user:{ nombre }, user:{ logged }, dispatch} = useContext(AuthContext);

    const history = useHistory();

    console.log(history);

    const handleLogout = () => {

        dispatch({
            type: types.logout,
            payload: {}
        });

        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    
                    { logged ?
                    <>
                        <span className="nav-item nav-link text-info">
                            { nombre }
                        </span>
                    <button 
                        
                        className="nav-item nav-link btn" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                    </>
                    :

                    <NavLink 
                        
                        className="nav-item nav-link btn" 
                        exact
                        to="/login"
                    >
                        Login
                    </NavLink>

                    }
                    
                </ul>
            </div>
        </nav>
    )
}