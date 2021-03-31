import React, {useState, useEffect} from 'react';
import LoadingMask from './LoadingMask';
import Product from './Product';
import { v4 as uuidv4 } from "uuid";
import '../App.css';

const ProductList = () => {

		const [data, setData] = useState([]);
		const [isLoaded, setIsLoaded] = useState(false); 

	useEffect(() => {
		fetch('http://localhost:8000/')
		.then((response) => response.json())
		.then((data) => {			
			setData(data.products);			
			setIsLoaded(true);  
		});
		
	}, []);	
	
	return (
		<div className="productlist-container">			
			
			{isLoaded ? data.map((dataJsonProperty) => 
				<Product 
				key={uuidv4()} 
				dataJsonProperty={dataJsonProperty}					
				/>)		
				: <LoadingMask />}		
		</div>
	)
};

export default ProductList;