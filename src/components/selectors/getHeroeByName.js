const { heroes } = require("../../data/heroes");


export const getHeroeByName = ( name ) => {

    if( name === '' ) {
        return heroes;
    }

    name = name.toLocaleLowerCase();
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ));
}