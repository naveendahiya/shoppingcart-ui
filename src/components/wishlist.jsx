import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import WishlistCard from './wishlistCard';


const Wishlist = () => {

    const List = () => {
        let items = useSelector(state => state.whishlist);
        let products = [];
        if(items.length > 0){
            products = items.map((item) => 
                 <WishlistCard item={item} key={item.name} />
           )
        }else{
           products = <h1>Wishlist is empty</h1>
        }
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
                    <span>Wishlist</span>(15)
               </div>


                <div className="box-3">
                   {List()}
                </div>

            </Typography>
        </Container>
    </React.Fragment>
    )
}

export default Wishlist;