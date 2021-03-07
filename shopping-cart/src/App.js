import React,{useState} from "react";
import data from './data.json'
import Products from "./Components/Products";

function App() {

  const [state,setState] = useState({
    products : data.products,
    sort : '',
    size : ''
  })

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
              <Products products={state.products}/>
          </div>
          <div className="sidebar">sidebar</div>
        </div>
      </main>
      <footer>All Right Reserved</footer>
    </div>
  );
}

export default App;
