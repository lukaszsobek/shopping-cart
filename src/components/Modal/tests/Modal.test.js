import { Modal } from "../";

describe("Modal",() => {
    it("returns null if isModalShown false",() => {
        const props = {
            closeModal: () => null
        }
        const testModal = new Modal(props).render();
        expect(testModal).toBe(null);
    });
});