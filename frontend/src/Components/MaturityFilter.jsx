import React from 'react';


const MaturityFilter = ({search, setSearch, dataJsonProperty}) => {

	/*const [maturity, setMaturity] = useState([]);*/

	const onChangeHandler = (event) => {
		if (event.target.value !== "összes") {
			setSearch(event.target.value);
		}	else {
			setSearch(dataJsonProperty);
		}
	}

	console.log(`selected maturity: ${search}`);

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

export default MaturityFilter;