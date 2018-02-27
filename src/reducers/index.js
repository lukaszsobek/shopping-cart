import {
    ADD_ITEM,
    CLEAR_ALL_ITEMS,
    CLOSE_MODAL,
    DELETE_ITEM,
    OPEN_ADD_ITEM_MODAL,
    OPEN_EDIT_ITEM_MODAL,
    UPDATE_ITEM
} from "../constants";

import availableProducts from "../assets/fixtures/availableProducts";

const initialState = {
    availableProducts,
    cartContent: [],
    editItemId: null,
    isModalShown: false
}

const rootReducer = (state = initialState, action) => {

    const { cartContent } = state;

    switch(action.type) {
        case ADD_ITEM:
            return { 
                ...state,
                cartContent: cartContent.concat(action.item)
            }

        case CLEAR_ALL_ITEMS:
            return {
                ...state,
                cartContent: []
            }

        case CLOSE_MODAL:
            return {
                ...state,
                editItemId: null,
                isModalShown: false
            }

        case DELETE_ITEM:
            return {
                ...state,
                cartContent: cartContent.filter((item,id) => {
                    return id !== action.itemId;
                })
            }

        case OPEN_EDIT_ITEM_MODAL: 
            return {
                ...state,
                isModalShown: true,
                editItemId: action.itemId
            }

        case OPEN_ADD_ITEM_MODAL:
            return {
                ...state,
                isModalShown: true
            }

        case UPDATE_ITEM:
            const { itemId, item } = action;

            const newCartContent = [...cartContent];
            newCartContent[itemId] = item;

            return {
                ...state,
                cartContent: newCartContent 
            }

        default:
            return state
    }
};

export default rootReducer;