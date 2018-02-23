import CartContentHeader from "../CartContentHeader";

describe("Renders",() => {
    it("header of cart content", () => {
        expect(CartContentHeader()).toMatchSnapshot();
    })
})