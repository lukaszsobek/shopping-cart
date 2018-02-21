import {
    ADD_ITEM,
    CLEAR_ALL_ITEMS,
    CLOSE_MODAL,
    DELETE_ITEM,
    OPEN_ADD_ITEM_MODAL,
    OPEN_EDIT_ITEM_MODAL,
    UPDATE_ITEM
} from "../constants";

export const addItem = item => ({
    type: ADD_ITEM,
    item
});

export const clearAllItems = () => ({
    type: CLEAR_ALL_ITEMS
});

export const closeModal = () => ({
    type: CLOSE_MODAL
})

export const deleteItem = itemId => ({
    type: DELETE_ITEM,
    itemId
});

export const openEditItemModal = itemId => ({
    type: OPEN_EDIT_ITEM_MODAL,
    itemId
});

export const openAddItemModal = () => ({
    type: OPEN_ADD_ITEM_MODAL
});

export const updateItem = (itemId, item) => ({
    type: UPDATE_ITEM,
    itemId,
    item
});

