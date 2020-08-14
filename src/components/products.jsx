import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ProductCard from './productCard';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../styles/pages/products.scss';




class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container className='box' maxWidth="lg">
                    <Typography component="div" style={{ backgroundColor: 'white', height: 'fit-content', marginTop: '64px' }}>

                        <div className="box-1">
                            <span>Plain T-Shirts</span>(15)
                       </div>


                        <div className="box-3">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>

                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

export default ProductsList;