import React, {useState, useEffect } from "react";
import Product from './Product';
import { v4 as uuidv4 } from "uuid";



const SearchListMaturity =({data, maturity}) => {

  const [results, setResults] = useState([]);

	useEffect(() => 
    setResults(data.filter(
      (product) =>
        {return product.maturitygroup === maturity
        ? product : maturity === "összes" ? true : false}         
    )), [maturity, data]);

	

  return (    
    <div className="container">
      {results.map((dataJsonProperty) => 
        <Product 
        key={uuidv4()} 
        dataJsonProperty={dataJsonProperty}
        results={results}
        setResults={setResults}        				
        />)}
    </div>
  );
}

export default SearchListMaturity;
