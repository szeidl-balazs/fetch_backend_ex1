import React from 'react';

const FilterMaturity = ({maturity, setSearch, dataJsonProperty, setMaturity}) => {
	
	const maturityChangeHandler = (event) => {
		if (event.target.value) {			
			setMaturity(event.target.value);
		}	else {
			setSearch(dataJsonProperty);
		}
	}

	/*const maturityChangeHandler = (event) => {
		setMaturity(event.target.value);
	}*/


	console.log(maturity);
	return (
		<div>
			<label>Éréscsoport</label>
			<select onChange={maturityChangeHandler}>
				<option value="összes">összes</option>
				<option value="igen korai">igen korai</option>
				<option value="korai">korai</option>
				<option value="közép-korai">közép-korai</option>
				<option value="középérésű">középérésű</option>
			</select>
		</div>
	);
}

export default FilterMaturity;