import React from 'react';
import { Route } from 'react-router-dom';
import {NavBar} from '../components/ui/NavBar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import DcScreen from '../components/dc/DcScreen';
import SearchScreen from '../components/search/SearchScreen';


const RouteWithSubRoutes = (route) => {
    return ( 
        <>
            <NavBar />
            <div className="container mt-2">
                <Route exact path="/marvel" component={ MarvelScreen     } />
                <Route exact path="/hero/:heroId" component={ HeroScreen } />

                <Route exact path="/dc" component={ DcScreen } />

                <Route exact path="/search" component={ SearchScreen } />

                <Route path="/" />
            </div>
        </>
     );
}
 
export default RouteWithSubRoutes;