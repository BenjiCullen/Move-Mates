// import actions
import {
    UPDATE_PRODUCTS,
    UPDATE_ServiceS,
    UPDATE_CURRENT_Service,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from './actions';

// Set default state  
const initialState = {
    products: [],
    Services: [],
    currentService: '',
    cart: [],
    cartOpen: false
}

// Root reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // if the action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        // if the action type value is the value of `UPDATE_ServiceS`, return a new state object with an updated Services array
        case UPDATE_ServiceS:
            return {
                ...state,
                Services: [...action.Services]
            };
        // if the action type value is the value of `UPDATE_CURRENT_Service`, return a new state object with an updated currentService value
        case UPDATE_CURRENT_Service:
            // if (currentService === 'All Services') {
                return {
                    ...state,
                    currentService: action.currentService,
                };
            // };
        // if the action type is ADD_TO_CART, return a new state object with the updated cart object
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product]  
            };
        // if the action type is ADD_MULTIPLE_TO_CART, return a new state object with the updated cart object
        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.products]
            };
        // if the action type is REMOVE_FROM_CART, return a new state object with the updated cart and close the cart if last item is removed
        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
            });
            
            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };
        // if the action type is UPDATE_CART_QUANTITY, return a new state object with the updated cart, updating only the quantity of the specified
        // product ID and returning product for unchanged products
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            };
        // if the action type is CLEAR_CART, return a new state object with the cart emptied and closed
        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };
        // if the action type is TOGGLE_CART, return a new state object with the cartOpen property toggled
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };
        // if it's none of these actions, do not update the state and just return the current state
        default:
            return state;
    }
};

export default reducer;