import './App.css';
import ProductList from './Components/ProductList';
import ProductTableHeader from './Components/ProductTableHeader';

function App() {
  return (
    <div className="App">
      <h1>TERMÉKEK</h1>
      <div className="productTable-cont">
        <ProductTableHeader/>
        <ProductList />
      </div>      
    </div>
  )
};

export default App;
