import {Link} from 'react-router-dom';
const OrderSuccess = () => {
    return (
        <div>
            <h2>Order Success</h2>
            <p>Thank you for your order!</p>
            <Link to = "/products">Back to products</Link>
        </div>
    );
};
export default OrderSuccess;