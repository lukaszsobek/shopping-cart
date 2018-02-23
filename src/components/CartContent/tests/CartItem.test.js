import CartItem from "../CartItem";

describe("Renders",() => {
    it("cart item", () => {

        const props = {
            comments: "test",
            deleteItem: () => null,
            id: 0,
            name: "some item",
            net_price: 10.28,
            number: 1,
            openEditItemModal: () => null,
            tax: 7
        }

        expect(CartItem(props)).toMatchSnapshot();
    })
})