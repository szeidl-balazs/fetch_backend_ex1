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
		
	let features = data.map((item) => item.features);
	
	return (
		<div className="productlist-container">
			{isLoaded ? data.map((item) => 
				<Product 
				key={uuidv4()} 
				brand={item.brand} 
				name={item.name}
				fao={item.FAO} 
				maturitygroup={item.maturitygroup}
				trait={item.trait}	
				features={features.map((feature) => feature)}			
				/>)		
				: <LoadingMask />}
		
		</div>
	)
};

export default ProductList;