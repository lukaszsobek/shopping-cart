import {
    ADD_ITEM,
    CLEAR_ALL,
    DELETE_ITEM
} from "../constants/index";

export const clearAll = () => ({
    type: CLEAR_ALL
});

export const addItem = item => ({
    type: ADD_ITEM,
    addItem: item
});

export const deleteItem = itemId => ({
    type: DELETE_ITEM,
    deleteItemId: itemId
});