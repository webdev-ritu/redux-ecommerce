import axios from 'axios';
const initialProductState = {
    products: [],
    loading: false,
    error: null,
};
const FETCH_PRODUCTS_LOADING = 
'FETCH_PRODUCTS_LOADING';
const FETCH_PRODUCTS_SUCCESS =
'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILURE =
'FETCH_PRODUCTS_FAILURE';
export const fetchProducts = () => async (dispatch) => {
    dispatch({type: FETCH_PRODUCTS_LOADING});
   try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
    });
   }catch (error) {
    dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error.message,
    });
   }
};
export const productReducer = (state = initialProductState, action)=>{
    switch (action.type){
        case FETCH_PRODUCTS_LOADING:
        return {...state, loading: true, error: null};
        case FETCH_PRODUCTS_SUCCESS:
        return {...state, loading: false, products: action.payload};
        case FETCH_PRODUCTS_FAILURE:
        return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};