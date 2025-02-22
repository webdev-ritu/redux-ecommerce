const initialCartState = {
    items: [],
}
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const PLACE_ORDER = 'PLACE_ORDER';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});
export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});
export const updateQuantity = (id, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: {id, quantity},
});
export const placeOrder = () => ({
    type: PLACE_ORDER,
});

export const cartReducer = (state = initialCartState, action) => {
    switch (action.type){
        case ADD_TO_CART:
            return{
                ...state,
                items: state.items.some((item) => item.id === action.payload.id)
                ? state.items.map((item) => item.id === action.payload.id
                ? {...item, quantity: item.quantity + 1}: item)
                : [...state.items, {...action.payload, quantity: 1}],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case UPDATE_QUANTITY:
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload.id
                ? {...item, quantity: action.payload.quantity}
                : item),
            };
        case PLACE_ORDER:
            return {
                ...state,
                items: [],
            };
        default:
            return state;
        }
    };