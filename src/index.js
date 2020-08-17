import React from 'react';
import ReactDOM from 'react-dom';
import PersistentDrawerLeft from './components/drawer';
import ProductList from './components/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './components/productDetail';
import Checkout from './components/Checkout/Checkout';
ReactDOM.render(
	<React.StrictMode>
		<PersistentDrawerLeft />
		<ProductList />
		<ProductDetail />
		<Checkout />
	</React.StrictMode>,
	document.getElementById('root')
);

