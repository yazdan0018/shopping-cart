import React from 'react';
import data from '../data.json';

function Filter(props) {

    const {filterProduct, sortProduct} = props

    return (
        <div className='filter'>
            <div className='filter-result'>{data.products.length} Products</div>

            <div className='filter-sort'>Order{' '}
                <select value={props.sort} onChange={sortProduct}>
                    <option value="">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>

            <div className='filter-size'>Filter{' '}
                <select value={props.size} onChange={filterProduct}>
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;