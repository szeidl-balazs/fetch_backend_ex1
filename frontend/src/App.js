import React, {useState} from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import ProductTableHeader from './Components/ProductTableHeader';
import SearchBar from './Components/SearchBar'
import SearchList from './Components/SearchList'
import FilterMaturity from './Components/FilterMaturity';

function App() {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]); 
  const [maturity, setMaturity] = useState("");

  /*<BrandFilterList data={data} setData={setData}/>*/

  return (
    <div className="App">
      <h1>TERMÉKEK</h1>
      <FilterMaturity 
        setSearch={setSearch} 
        maturity={maturity}
        setMaturity={setMaturity}
      />
      <div className="productTable-cont">
        <SearchBar search={search} setSearch={setSearch}/>
        <ProductTableHeader/>
        {search ? <SearchList search={search} data={data} setData={setData} maturity={maturity} setMaturity={setMaturity}/> :
        <ProductList data={data} setData={setData} maturity={maturity} setMaturity={setMaturity}/>
        }        
      </div>      
    </div>
  )
};

export default App;
