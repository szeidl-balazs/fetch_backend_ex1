import React, {useState, useEffect} from 'react';

const Home = () => {

		const [data, setData] = useState([]);
	

	useEffect(() => {
		fetch('http://localhost:8000/')
		.then(response => response.json())
		.then(json => {
			console.log('json is:')
			console.log(json);
			setData(json.product);
			console.log(data[0].yield.Sopron[0]);
		});
		
	}, [])

	console.log('data is:');
	console.log(data);

	console.log('data element property is:');
	

	return (
		<div>
			<p>Próba</p>
			<p>{data[0].yield.Sopron[0]}</p>
			
		</div>
	)
};

export default Home;