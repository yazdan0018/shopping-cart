import React from 'react';

function Products({products}) {
    return (
        <div>
            <ul className='products' >
                {products.map(product => {
                    return <li key={product._id}>
                        <div className="product">
                            <a href={'#'+product._id}>
                                <div className="product-back">{product.availableSizes+ ' ' }</div>
                                <img src={product.image} alt={product.title}/>
                                <p>{product.title}</p>
                            </a>
                            <div className="product-price">
                                <p>${product.price}</p>
                                <button className='btn primary'>Add to cart</button>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Products;