import React, {useState, useEffect} from 'react';
import LoadingMask from './LoadingMask';
import Product from './Product';
import { v4 as uuidv4 } from "uuid";

const ProductList = () => {

		const [data, setData] = useState([]);
		const [isLoaded, setIsLoaded] = useState(false); 

	useEffect(() => {
		fetch('http://localhost:8000/')
		.then(response => response.json())
		.then(json => {
			console.log('json is:')
			console.log(json);
			setData(json.product);
			setIsLoaded(true);  
		});
		
	}, [])

	console.log('data is:');
	console.log(data);

	console.log('data element property is:');
	/*	{isLoaded ? data.map((item, index) => <Product key={uuidv4} brand={item.brand} name={item.name} />) : <LoadingMask />}*/
	/*{isLoaded ? <p>hello</p> : <LoadingMask />}*/			
	return (
		<div>
			<p>Termékek</p>
		
			{isLoaded ? data.map((item) => <Product key={uuidv4} brand={item.brand} name={item.name} />) : <LoadingMask />}
		</div>
	)
};

export default ProductList;