import React,{ useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import TransitionsModal from './quickview';
import '../styles/pages/productcard.scss';
import CancelIcon from '@material-ui/icons/Cancel';

import { useDispatch } from 'react-redux';
import { itemDelete } from '../reducers/wishlistSlice';
import { productAdded } from '../reducers/cartSlice';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function WishlistCard(props) {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const [cartadd, setCartadd] = useState(false);
  const dispatch = useDispatch()
  const childRef = useRef();

  let item2 = props.item;
  item2 = {...item2, quantity: quantity}

  const WishlistDelete = () => {
      if(item2){
          dispatch(
              itemDelete(item2, item2.name)
          )
      }
  }

  const CartAdd = () => {
    if(item2){
      dispatch(
        productAdded(item2)
      )
      setCartadd(true);
    }
  }

  return (
    <Card  className='product-card' >
      <TransitionsModal ref={childRef} />
      <CheckBoxOutlineBlankIcon onClick={()=>childRef.current.handleOpen()} className='quick-view' />
      <CancelIcon onClick={WishlistDelete} className='wishlist' />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
  <div className="product-name">{props.item.name}</div>
  <div className="product-price">${props.item.price}</div>
        </Typography>
      </CardContent>
      <CardActions className='card-button' disableSpacing>
      <Button color="secondary">Details</Button>

    <Button onClick={(event)=>CartAdd()} variant="contained" color="secondary" disableElevation>
     {cartadd == true ? 'Cart' : 'ADD TO CART'}
     </Button>
      </CardActions>
    </Card>
  );
}
