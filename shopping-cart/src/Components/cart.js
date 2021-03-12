import React from 'react';

const Cart = (props) => {


    const count = props.cartItems.reduce((accu, cur) => {
        return accu + cur.count
    }, 0)

    return (
        <div>
            {
                count === 0 ?
                    <div className='cart cart-header'>Cart is empty</div>
                    :
                    <div className='cart cart-header'>You have {count} in the cart</div>
            }

            <div>
                <div className='cart'>
                    <ul className='cart-items'>
                        {props.cartItems.map(cartItem => {
                            return <li key={cartItem.id}>
                                <div>
                                    <div className='product-img'></div>
                                    {/*<img src={cartItem.image}/>*/}
                                </div>
                                <div>
                                    {cartItem.title}
                                </div>
                                <div className="right">
                                    <div>${cartItem.price}x{cartItem.count}</div>
                                    <button onClick={() => {
                                        props.removeFromCart(cartItem)
                                    }}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
                {props.cartItems.length !== 0 && (
                    <div className="cart">
                        <div className="total">
                            <div>
                                Total : $
                                {Math.round(props.cartItems.reduce((accu, cur) => {
                                    return accu + cur.price * cur.count
                                }, 0))}
                            </div>
                            <button className='btn primary'>Proceed</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;