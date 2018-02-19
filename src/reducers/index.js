import {
    ADD_ITEM,
    CLEAR_ALL,
    DELETE_ITEM
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

    const { availableProducts, cartContent } = state;
    const randomItem = Math.floor(Math.random() * availableProducts.length);

    switch(action.type) {
        case ADD_ITEM:
            return { 
                ...state,
                cartContent: cartContent.concat(availableProducts[randomItem])
            }

        case CLEAR_ALL:
            return { ...state, cartContent }

        case DELETE_ITEM:
            return {
                ...state,
                cartContent: cartContent.filter((item,id) => {
                    return id !== action.deleteItemId;
                })
            }

        default:
            return state
    }
};

export default rootReducer;