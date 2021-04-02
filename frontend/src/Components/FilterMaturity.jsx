import React from 'react';

const FilterMaturity = ({setSearch, dataJsonProperty, setMaturity}) => {

	/*setSearch(event.target.value);*/
	
	const onChangeHandler = (event) => {
		if (event.target.value !== "összes") {
			
			setMaturity(event.target.value);
		}	else {
			setSearch(dataJsonProperty);
		}
	}
	
	return (
		<div>
			<label>Éréscsoport</label>
			<select onChange={onChangeHandler}>
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