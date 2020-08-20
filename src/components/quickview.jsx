import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../styles/pages/quickview.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const TransitionsModal = forwardRef((props, ref) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    useImperativeHandle(ref, () => ({
        handleOpen() {
            setOpen(true);
        }
    }))

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="modal-box">
                        <div className="left">
                            <div className="img"></div>
                        </div>
                        <div className="right">
                            <div className="info">
                                <div className="product-info">
                                    <h3 className='product-info-name'>{props.item.name}</h3><br></br><span className='product-info-price'>${props.item.price}</span>
                                </div>
                                <div className="product-quantity">
                                    <span>Quantity</span><br></br>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                </div>
                                <div className="cart">
                                    <Button variant="contained" color="primary" disableElevation>
                                        ADD TO CART
                                    </Button><br></br>
                                    <span>Details</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
})

export default TransitionsModal;