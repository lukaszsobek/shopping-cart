import {
    ADD_ITEM,
    CLEAR_ALL
} from "../constants/index";

const initialState = {
    availableProducts: [
        {
            name: "Product1",
            comments: "",
            net_price: 8.00,
            tax: 19
        },{
            name: "Product2",
            comments: "",
            net_price: 11.00,
            tax: 19
        },{
            name: "Product3",
            comments: "",
            net_price: 16.25,
            tax: 7
        },{
            name: "Product4",
            comments: "",
            net_price: 12.00,
            tax: 7
        }
    ],
    cartContent: [] 
};

const rootReducer = (state = initialState, action) => {

    const randomItem = Math.floor(Math.random() * state.availableProducts.length);

    switch(action.type) {
        case CLEAR_ALL:
            return { ...state, cartContent: action.cartContent }
        case ADD_ITEM:
            return { 
                ...state,
                cartContent: state.cartContent.concat(state.availableProducts[randomItem])
            }
        default:
            return state
    }
};

export default rootReducer;