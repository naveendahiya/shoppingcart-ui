import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import ProductList from '../components/products';
import Wishlist from '../components/wishlist';
import Cart from '../components/cart';

const ROUTES = [
    { path: '/', key: "APP_ROOT", exact: true, component: () => <h1>Categories</h1>},
    { path: '/products', key: 'APP_PRODUCTS', exact: true, component: ProductList},
    { path: '/wishlist', key: 'APP_WISHLIST', exact: true, component: Wishlist},
    { path: '/cart', key: 'APP_CART', exact: true, component: Cart },
    { 
        path: '/cart/checkout',
        key: 'APP_CHECKOUT',
        component: () => RenderRoutes,
        routes: [
            {
                path: '/cart/checkout',
                key: 'APP_CHECKOUT',
                exact: true,
                component: () => <h1>checkout</h1>
            }
        ]
    }
]


export default ROUTES;

function RoutesWithSubRoutes(route){
    return(
        <Route 
          path={route.path}
          exact={route.exact}
          render={props => <route.component {...props} routes={route.routes} />}
        />
    )
}


export function RenderRoutes({ routes }){
    return(
        <Switch>
            {routes.map((route, i) => {
                return <RoutesWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={()=> <h1>NOT FOUND</h1>} />
        </Switch>
    )
}