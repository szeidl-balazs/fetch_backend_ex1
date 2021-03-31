import React, {useState} from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import ProductTableHeader from './Components/ProductTableHeader';
import SearchBar from './Components/SearchBar'

function App() {

  const [search, setSearch] = useState("");
  
  return (
    <div className="App">
      <h1>TERMÉKEK</h1>
      <div className="productTable-cont">
        <SearchBar search={search} setSearch={setSearch}/>
        <ProductTableHeader/>
        <ProductList />
      </div>      
    </div>
  )
};

export default App;
