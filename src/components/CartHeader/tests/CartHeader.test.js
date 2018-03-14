import { CartHeader } from "../";

describe("CartHeader",() => {
    const props = {
        clearAllItems: () => null,
        openAddItemModal: () => null
    }
    const testHeader = new CartHeader(props);
    it("renders",() => {
        expect(testHeader.render()).toMatchSnapshot();
    });
});