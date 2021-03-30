import React from 'react';
import '../App.css';

const ProductFeatures = (props) => {


	return (
		<div className="product-feature-cont">
			<ul><li>{props.features}</li></ul>
		</div>
	)
};

export default ProductFeatures;