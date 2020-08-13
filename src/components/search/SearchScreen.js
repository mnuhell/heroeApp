import React, { useMemo } from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroeByName } from '../selectors/getHeroeByName';



const SearchScreen = ( { history } ) => {

    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );
    
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFilter = useMemo( () => getHeroeByName( q ), [ q ])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your heroe"
                            className="form-control"
                            name="searchText"
                            value={ searchText }
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                        Search...
                        </button>
                    </form>
                    
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        ( q !== '' && heroesFilter.length === 0) 
                            &&
                            <div className="alert alert-danger"> 
                                No hemos encontrada con este termino de busqueda { q }
                            </div>
                    }

                    { 
                        heroesFilter.map( hero => (
                            <HeroCard
                                key= {hero.id}
                                {...hero}
                             />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen;