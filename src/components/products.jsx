import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProductCard from './productCard';
import '../styles/pages/products.scss';
import TShirts, { Shirt, Trousers, Jeans } from '../Data';
import {
    useParams,
    useRouteMatch
} from "react-router-dom";

const ProductsList = (props) => {
    let { category } = useParams();

    const List = () => {
        let items = [];
        switch (category) {
            case "TShirts":
                items = TShirts;
                break;
            case "Shirts":
                items = Shirt;
                break;
            case "Trousers":
                items = Trousers;
                break;
            case "Jeans":
                items = Jeans;
                break;
            default:
                items = TShirts;
                break;
        };

        const products = items.map((item) =>
            <ProductCard item={item} key={item.name} />
        )
        return (
            products
        )
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className='box' maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: 'white', height: 'fit-content', marginTop: '64px' }}>

                    <div className="box-1">
                        <span>Plain T-Shirts</span>(15)
               </div>


                    <div className="box-3">
                        {List()}
                    </div>

                </Typography>
            </Container>
        </React.Fragment>
    )
}


export default ProductsList;