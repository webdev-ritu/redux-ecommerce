import { useSelector, useDispatch} from "react-redux";
import {placeOrder} from '../redux/actions';
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const cartItems = useSelector((state)=> state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const handlePlaceOrder = () => {
        dispatch(placeOrder());
        navigate('/order');
    };
    return (
        <div>
            <h2>checkout</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>

            ):(
                <div>
                    {cartItems.map(item => (
                        <div key = {item.id}>
                            <h3>{item.title}</h3>
                           
                            <p>Quantity: {item.quantity}</p>
                       <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                    ))}
                    <h3>Total Price : ${totalPrice.toFixed(2)}</h3>
                    <button onClick = {handlePlaceOrder}>Place Order</button>
                    </div>
                    )}
                    </div>
                    );
                    };
                    export default Checkout;