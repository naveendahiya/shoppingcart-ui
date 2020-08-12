import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


class ProductsList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
          </React.Fragment>
        )
    }
}

export default ProductsList;