import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/productReducer';
import {addToCart} from '../redux/cartReducer';

const ProductList = () => {
    const dispatch = useDispatch();
    const {products, loading,error}=
    useSelector(state=>state.products);
    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error loading....</p>;
    return (
        <div>
            {products.map(product=>(
                <div key={product.id}>
                    <img src={product.image} alt={product.tittle} width="100"/>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
    
};
export default ProductList;