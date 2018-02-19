import {
    ADD_ITEM,
    CLEAR_ALL
} from "../constants/index";

export const clearAll = () => ({
    type: CLEAR_ALL,
    cartContent: []
});

export const addItem = item => ({
    type: ADD_ITEM,
    addItem: item
});