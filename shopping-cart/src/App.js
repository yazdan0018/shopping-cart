import React, {useState} from "react";
import data from './data.json'
import Products from "./Components/Products";
import Filter from "./Components/Filter";
import Cart from "./Components/cart";

function App() {

    const [state, setState] = useState(data.products);
    const [sort, setSort] = useState('');
    const [size, setSize] = useState('');
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
      const value = cartItems.find(item =>{
         return item.id === product.id
      })
       if(value){
           const filtered = cartItems.filter(cartItem =>{
             return cartItem.id !== product.id
           })
           product.count = product.count + 1;
           setCartItems([...filtered,product])
           //console.log(cartItems)
       }else{
           product.count = 1;
         setCartItems([...cartItems,product])
       }
    };
   console.log(cartItems)
    const sortProduct = (e) => {
        setSort(e.target.value);
        setState((state) => (
            state.slice().sort((a, b) => (
                e.target.value === 'lowest' ?
                    ((a.price > b.price) ? 1 : -1) :
                    e.target.value === 'highest' ?
                        ((a.price < b.price) ? 1 : -1) :
                        ((a.id > b.id) ? 1 : -1)
            ))
        ));
    };

    const filterProduct = (e) => {
        if (e.target.value === '') {
            setState(data.products)
        } else {
            setSize(e.target.value)
            setState(state.filter((product) => {
                return product.availableSizes.indexOf(e.target.value) >= 0;
            }))
        }
    }

    return (
        <div className="grid-container">
            <header>
                <a href="/">React Shopping Cart</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter size={size} sort={sort}
                                sortProduct={sortProduct} filterProduct={filterProduct}/>
                        <Products products={state} addToCart={addToCart}/>
                    </div>
                    <div className="sidebar">
                        <Cart cartItems={cartItems}/>
                    </div>
                </div>
            </main>
            <footer>All Right Reserved</footer>
        </div>
    );
}

export default App;
