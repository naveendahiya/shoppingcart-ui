import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '100%',
	},
	media: {
		height: '100%',
		paddingTop: '56.25%', // 16:9
		backgroundColor: 'blue',
	},
	avatar: {
		backgroundColor: red[500],
	},
	heading: {
		fontSize: '2rem',
	},
}));

const ProductDetail = () => {
	const classes = useStyles();

	return (
		<Box color="text.primary">
			<CssBaseline />
			<Container maxWidth="lg">
				<Typography component="div" style={{ height: '100vh' }}>
					<Card variant="outlined" className={`row ${classes.root}`}>
						<CardMedia className={`col-lg-6 ${classes.media}`} image="../images/cart.png" title="Paella dish" />
						<CardContent className={`col-lg-6 ${classes.details}`}>
							<Typography variant="body2" color="textSecondary" component="p">
								<h2 className={`product-name ${classes.heading}`}>Buffalo - Striploin</h2>
								<div className="product-price">$39.11</div>
							</Typography>
							<Typography gutterBottom variant="body2" color="textSecondary" component="p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere ante eu mattis
								scelerisque. Nullam id venenatis eros. Aenean sit amet nisi magna. Pellentesque
								imperdiet risus orci, in elementum massa tincidunt a. Ut et lacus ac mauris eleifend
								blandit eget sed nulla. Mauris sit amet volutpat lectus, et dignissim mauris. Mauris at
								laoreet ligula. Nullam in dolor quis enim rhoncus elementum. Cras vehicula sem ac risus
								sodales dictum. Cras et dolor at nunc volutpat dignissim. Mauris bibendum ullamcorper
								dolor, ac sollicitudin sapien vestibulum sed. Proin a ultricies sem. Vestibulum a erat
								nec velit porta fringilla. Donec quis urna neque. Maecenas sit amet aliquet quam.
								Maecenas nisl elit, gravida in dui vel, porta accumsan orci.
							</Typography>
							<CardActions className="card-button" disableSpacing>
								<Button variant="contained" color="secondary" disableElevation>
									ADD TO CART
								</Button>
							</CardActions>
						</CardContent>
					</Card>
				</Typography>
			</Container>
		</Box>
	);
};

export default ProductDetail;
