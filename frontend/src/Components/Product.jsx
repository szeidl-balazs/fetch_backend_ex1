import React from 'react';
import { v4 as uuidv4 } from "uuid";
import '../App.css';

const Product = ({dataJsonProperty}) => {

	return (
		<div className="product-container">			
			<div>{dataJsonProperty.brand}</div>
			<div>{dataJsonProperty.name}</div>
			<div>{dataJsonProperty.utilization}</div>
			<div>{dataJsonProperty.fao}</div>
			<div>{dataJsonProperty.maturitygroup}</div>
			<div>{dataJsonProperty.trait}</div>
			<div className="bulleted-list"><ul>{dataJsonProperty.features.map((feature) => <li key={uuidv4()}>{feature}</li>)}</ul></div>
			<div className="bulleted-list"><ul>{dataJsonProperty.benefits.map((benefit) => <li key={uuidv4()}>{benefit}</li>)}</ul></div>
		</div>
	)
};

export default Product;