import React, {useState} from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import ProductTableHeader from './Components/ProductTableHeader';
import SearchBar from './Components/SearchBar'
import SearchList from './Components/SearchList'

function App() {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  /*<BrandFilterList data={data} setData={setData}/>*/
  return (
    <div className="App">
      <h1>TERMÉKEK</h1>
      <div className="productTable-cont">
        <SearchBar search={search} setSearch={setSearch}/>
        <ProductTableHeader/>
        {search ? <SearchList search={search} data={data} setData={setData}/> :
        <ProductList search={search} data={data} setData={setData}/>
        }        
      </div>      
    </div>
  )
};

export default App;
