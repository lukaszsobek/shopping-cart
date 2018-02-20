import {
    ADD_ITEM,
    CLEAR_ALL,
    DELETE_ITEM,
    OPEN_ADD_ITEM_MODAL
} from "../constants";

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

export const openAddItemModal = () => ({
    type: OPEN_ADD_ITEM_MODAL
});