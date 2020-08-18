import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProductCard from './productCard';
import '../styles/pages/products.scss';
import TShirts from '../Data';

const ProductsList = (props) => {

    const List = () => {
        const items = props.location.aboutProps.data;
        console.log(items);
        const products = items.map((item) => 
              <ProductCard item={item} />
        )
        return(
           products
        )
    }

    return(
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