import React, { /*Component,*/ useState, useEffect } from "react";
import Card from "./Card.js";



const SearchList =({search, data}) => {

  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(data.filter(
      (product) =>
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
      	product.name.toLowerCase().includes(search.toLowerCase()) ||
				product.utilization.toLowerCase().includes(search.toLowerCase()) ||
				product.fao.toLowerCase().includes(search.toLowerCase()) ||
				product.maturitygroup.toLowerCase().includes(search.toLowerCase()) ||
				product.trait.toLowerCase().includes(search.toLowerCase()) ||
				product.features.toLowerCase().includes(search.toLowerCase()) ||
				product.benefits.toLowerCase().includes(search.toLowerCase())
	))},[search]);
  
		console.log(results);
  return (
    <div className="container">
      {results.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}

export default SearchList;