import React, {useState} from "react";
import data from './data.json'
import Products from "./Components/Products";
import Filter from "./Components/Filter";

function App() {

    const [state, setState] = useState({
        products: data.products,
        sort: '',
        size: ''
    });

    const sortProduct = (e) => {
        setState((state) => ({
            sort: e.target.value,
            products: state.products.sort((a, b) => (
                e.target.value === 'lowest' ?
                    ((a.price > b.price) ? 1 : -1) :
                    e.target.value === 'highest' ?
                        ((a.price < b.price) ? 1 : -1) :
                        ((a._id > b._id) ? 1 : -1)

            ))
        }))
    }

    const filterProduct = (e) => {
        if (e.target.value === '') {
            setState({...state, products: data.products})
        } else {
            setState({
                size: e.target.value,
                products: data.products.filter((product) => {
                    return product.availableSizes.indexOf(e.target.value) >= 0
                })
            })
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
                        <Filter count={state.products.length} size={state.size} sort={state.sort}
                                sortProduct={sortProduct} filterProduct={filterProduct}/>
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
