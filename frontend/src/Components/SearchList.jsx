import React, {useState, useEffect } from "react";
import Product from './Product';
import { v4 as uuidv4 } from "uuid";



const SearchList =({search, data, maturity}) => {

  const [results, setResults] = useState([]);

  /*if (maturity !== "összes") {
    setResults(data.filter(
      (product) =>
        {return product.maturitygroup.toLowerCase().includes(search.toLowerCase())
        ? product : false}))

   console.log(typeof(maturity), maturity);*/   

  useEffect(() => 
    setResults(data.filter(
      (product) =>
        {return product.brand.toLowerCase().includes(search.toLowerCase()) ||
      	product.name.toLowerCase().includes(search.toLowerCase()) ||
				product.utilization.toLowerCase().includes(search.toLowerCase()) ||
				product.fao.toLowerCase().includes(search.toLowerCase()) ||
				product.maturitygroup.toLowerCase().includes(search.toLowerCase()) ||
        product.maturitygroup.toLowerCase().includes(maturity.toLowerCase()) ||
				product.trait.toLowerCase().includes(search.toLowerCase()) ||
				product.features.join(" ").toLowerCase().includes(search.toLowerCase()) ||
				product.benefits.join(" ").toLowerCase().includes(search.toLowerCase())
        ? product : false}
    )), [search, data, maturity]);  
  
          console.log(maturity);

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

export default SearchList;