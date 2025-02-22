import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.items);
    const cartCount = cartItems.reduce((total,item)=> total + item.quantity, 0);
    return (
        <nav className='navbar'>
            <Link to ="/">Products</Link>
            <Link to ="/cart">Cart ({cartCount})</Link>
        </nav>
    );
};
export default Navbar;