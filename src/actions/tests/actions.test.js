import * as actions from "../";

describe("Creates actions", () => {

    const item = "test item";
    const itemId = 4;

    describe("for cart", () => {
        
        it("adding an item", () => {
            expect(actions.addItem(item)).toMatchSnapshot();
        });

        it("deleting an item", () => {
            expect(actions.deleteItem(itemId)).toMatchSnapshot();
        });

        it("updating an item", () => {
            expect(actions.updateItem(itemId,item)).toMatchSnapshot();
        });

        it("clearing all items", () => {
            expect(actions.clearAllItems()).toMatchSnapshot();
        });

    }); // end cart tests

    describe("for modal", () => {

        it("opening add item modal", () => {
            expect(actions.openAddItemModal(itemId)).toMatchSnapshot();
        });

        it("opening edit item modal", () => {
            expect(actions.openEditItemModal(itemId)).toMatchSnapshot();
        });

        it("closing modal", () => {
            expect(actions.closeModal()).toMatchSnapshot();
        }); 

    }); // end modal tests



});