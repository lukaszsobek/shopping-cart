import Button from "../Button";

describe("Renders",() => {
    it("button", () => {
        const props = {
            className: "classNameTest",
            action: () => null,
            type: "button"
        }
        expect(Button(props)).toMatchSnapshot();
    })
})