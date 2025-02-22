import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart, updateQuantity} from '../redux/cartReducer';
import {Link} from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const totalPrice = cartItems.reduce((total,item) => total + item.price * item.quantity, 0);
    return (
        <div>
            {cartItems.length === 0 ?
            <p>your cart is empty</p>:
            (
                cartItems.map(item => (
                    <div key = {item.id}>
                        <h2>{item.tittle}</h2>
                        <p>Price: ${item.price}</p>
                        <input type = "number" value = {item.quantity} onChange = {(e) => dispatch(updateQuantity({id: item.id, quantity: Number(e.target.value)}))}/>
                        <button onClick = {() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
    ))
    )}
    <p>Total: ${totalPrice.toFixed(2)}</p>
    <Link to = "/checkout">Checkout</Link>
</div>
);
}   
export default Cart;