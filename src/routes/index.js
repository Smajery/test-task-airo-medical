import {ROUTE_BEER, ROUTE_HOME} from 'utils/routes';
import HomePage from 'pages/Home';
import BeerPage from 'pages/Beer';

export const publicRoutes = [
    {path: ROUTE_HOME, component: HomePage},
    {path: ROUTE_BEER, component: BeerPage}
]