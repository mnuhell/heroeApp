import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom';
import getHeroById from '../selectors/getHeroById';


const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    
    const hero = useMemo(() => getHeroById( heroId ), [ heroId ])

    if( !hero ) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if(history.lenght <= 2 ) {
            return history.push('/');
        } else {
            return history.goBack();
        }
        
    }

    const {superhero, publisher, alter_ego, first_appearance, characters} = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroId}.jpg`} alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter_ego: </b> { alter_ego }</li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher }</li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance }</li>
                </ul>

                <h5>Characters</h5>
                <p> {characters} </p>

                <button 
                onClick={ handleReturn }
                className="btn btn-outline-info">
                    return
                </button>

            </div>
        </div>
    )
}

export default HeroScreen;