import React from 'react';

function Products(props) {
    const{products,addToCart} = props;
    return (
        <div>
            <ul className='products' >
                {products.map(product => {
                    return <li key={product.id}>
                        <div  className="product">
                            <a href={'#'+product._id}>
                                <div className="product-back">{product.availableSizes+ ' ' }</div>
                                <img src={product.image} alt={product.title}/>
                                <p>{product.title}</p>
                            </a>
                            <div className="product-price">
                                <p>${product.price}</p>
                                <button onClick={() => addToCart(product)} className='btn primary'>Add to cart</button>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Products;