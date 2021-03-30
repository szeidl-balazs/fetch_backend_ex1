import React from 'react';
import ProductFeatures from './ProductFeatures';
import '../App.css';

const Product = (props) => {

	return (
		<div className="product-container">			
			<div>{props.brand}</div>
			<div>{props.name}</div>
			<div>FAO: {props.fao}</div>
			<div>Éréscsoport: {props.maturitygroup}</div>
			<div>Aszály gén: {props.trait}</div>
			<div>Jellemzők: <ProductFeatures /></div>
		</div>		
	)
};

export default Product;