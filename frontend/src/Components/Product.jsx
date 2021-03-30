import React from 'react';

const Product = (props) => {

	return (
		<div className="product-cont">
			<div>{props.brand}</div>
			<div>{props.name}</div>
		</div>
		
		
	)
};

export default Product;