import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import SearchScreen from '../components/search/SearchScreen';

const routes = [
    {
        path: "/marvel",
        component: MarvelScreen,
        routes: [
            {
                path: "/marvel/:marvelId",
                component: HeroScreen
            }
        ]
    },
    {
        path: "dc",
        component: DcScreen
    },

    {
        path: "search",
        component: SearchScreen
    }
]

export default routes;