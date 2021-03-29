import React from 'react';

const Home = () => {

	

	fetch('http://localhost:3000/')
	.then(response => response.json())
	.then(data => console.log(data))		
	

	/*useEffect(() => {
	}, [])*/


	return (
		<div>
			<p>Hello</p>
			
		</div>
	)
};

export default Home;