import React from 'react';
import ReactDOM from 'react-dom';
import PersistentDrawerLeft from './components/drawer';
import ProductList from './components/products';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <PersistentDrawerLeft />
    <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
);


