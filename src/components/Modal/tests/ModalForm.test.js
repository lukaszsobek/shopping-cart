import { ConstructDropdown, ModalForm } from "../ModalForm";

describe("ModalForm", () => {
    it("constructs dropdown", () => {
        const props = {
            productList: [{ name: "test1" }, {name: "test2"}],
            name: "testName",
            className: "testClass"
        }
        expect(ConstructDropdown(props)).toMatchSnapshot();
    });

    it("renders", () => {
        const props = {
            availableProducts: [{ name: "test1" }, {name: "test2"}]
        }
        const testModalForm = new ModalForm(props).render();
        expect(testModalForm).toMatchSnapshot();
    })
});

