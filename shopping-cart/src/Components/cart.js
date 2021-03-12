import React, {useState} from 'react';

const Cart = (props) => {

    const [showCheckout, setShowCheckout] = useState(false)
    const [checkout, setCheckout] = useState(
        {
            email: '',
            name: '',
            address: ''
        }
    );
    const [order, setOrder] = useState({});

    const count = props.cartItems.reduce((accu, cur) => {
        return accu + cur.count
    }, 0)

    const handleInput = (e) => {
        e.preventDefault();
        setCheckout({
            ...checkout,
            [e.target.name]: e.target.value
        })
    };

    const createOrder = (e) => {
        e.preventDefault();
        const order = {
            email: checkout.email,
            name: checkout.name,
            address: checkout.address,
            cartItems: props.cartItems
        }
        setOrder(order);
        props.createOrder(order)
    }

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
                            <button onClick={() => setShowCheckout(!showCheckout)} className='btn primary'>Proceed</button>
                        </div>
                    </div>
                )}
                {showCheckout && (
                    <div className="cart">
                        <form className='form-container' onSubmit={createOrder}>
                            <ul >
                                <label>Email</label>
                                <input
                                    name='email'
                                    type="email"
                                    required
                                    onChange={handleInput}/>
                            </ul>
                            <ul >
                                <label>Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    required
                                    onChange={handleInput}/>
                            </ul>
                            <ul >
                                <label>Address</label>
                                <input
                                    name='address'
                                    type='text'
                                    required
                                    onChange={handleInput}/>
                            </ul>
                            <ul>
                                <button className='btn primary' type='submit'>Checkout</button>
                            </ul>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;