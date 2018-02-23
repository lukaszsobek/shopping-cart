import reducer from "../";
import * as types from "../../constants";
import initialState from "../../assets/fixtures/initialState"

describe("Reducer handles", () => {

    const item = "test item";
    const itemId = 0;
    const updatedItem = "new test item";

    describe("basic state", () => {

        it("empty state",() => {
            expect(reducer({},"")).toEqual({});
        });

        it("initial state",() => {
            expect(reducer(initialState,"")).toMatchSnapshot();
        });

    }); // end basic state

    describe("item actions", () => {

        it("ADD_ITEM action",() => {
            const reducerOutput = reducer(initialState,{
                "type": "ADD_ITEM",
                item
            });
            expect(reducerOutput.cartContent).toEqual(["test item"]);
        });

        it("DELETE_ITEM action",() => {
            const state = {
                cartContent: [ "test item 1", "test item 2" ]
            };
            const reducerOutput = reducer(state,{
                "type": "DELETE_ITEM",
                itemId
            });
            expect(reducerOutput.cartContent).toEqual(["test item 2"]);
        });

        it("UPDATE_ITEM action",() => {
            const state = {
                cartContent: ["test item"]
            };
            const reducerOutput = reducer(state,{
                "type": "UPDATE_ITEM",
                item: updatedItem,
                itemId
            });
            expect(reducerOutput.cartContent).toEqual([updatedItem]);
        });

        it("CLEAR_ALL_ITEMS action",() => {
            const reducerOutput = reducer(initialState,{
                "type": "CLEAR_ALL_ITEMS"
            });
            expect(reducerOutput.cartContent).toEqual([]);
        });

    }); // end item actions

    describe("modal actions", () => {

        it("OPEN_ADD_ITEM_MODAL action",() => {
            const reducerOutput = reducer(initialState,{
                "type": "OPEN_ADD_ITEM_MODAL",
                itemId
            });
            expect(reducerOutput.editItemId).toBe(null);
            expect(reducerOutput.isModalShown).toBe(true);
        });

        it("OPEN_EDIT_ITEM_MODAL action",() => {
            const reducerOutput = reducer(initialState,{
                "type": "OPEN_EDIT_ITEM_MODAL",
                itemId
            });
            expect(reducerOutput.editItemId).toBe(itemId);
            expect(reducerOutput.isModalShown).toBe(true);
        });

        it("CLOSE_MODAL action",() => {
            const reducerOutput = reducer(initialState,{
                "type": "CLOSE_MODAL",
            });
            expect(reducerOutput.editItemId).toBe(null);
            expect(reducerOutput.isModalShown).toBe(false);
        });

    }); // end modal actions
});