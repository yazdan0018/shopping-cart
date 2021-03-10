import React from 'react';

const Cart = (props) => {

    const count = props.cartItems.reduce((accu, cur) => {
        return accu + cur.count
    }, 0)

    return (
        <div>
            {count === 0 ?
                <div className='cart cart-header'>Cart is empty</div>
                :
                <div className='cart cart-header'>You have {count} in the cart</div>}
        </div>
    );
}

export default Cart;