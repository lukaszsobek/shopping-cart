import CartItems from "../CartItems";

describe("Renders cart",() => {

    const item = {
        name: "test item",
        comments: "none",
        net_price: 12.12,
        tax: 7
    }

    it("without items", () => {
        const props = {
            cartContent: [],
            deleteItem: () => null,
            openEditItemModal: () => null
        }
        expect(CartItems(props)).toMatchSnapshot();
    });

    it("with 1 item", () => {
        const props = {
            cartContent: [ item ],
            deleteItem: () => null,
            openEditItemModal: () => null
        }
        expect(CartItems(props)).toMatchSnapshot();
    });

    it("with 2 items", () => {
        const props = {
            cartContent: [ item, item ],
            deleteItem: () => null,
            openEditItemModal: () => null
        }
        expect(CartItems(props)).toMatchSnapshot();
    });
});

