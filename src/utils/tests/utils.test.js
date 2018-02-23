import { currencyRound } from "../";

describe("Rounds values", () => {
    it("to 2nd decimal point", () => {
        expect(currencyRound(4)).toBe(4);
        expect(currencyRound(-6)).toBe(-6);
        expect(currencyRound(0.00)).toBe(0);
        expect(currencyRound(0.005)).toBe(0.01);
        expect(currencyRound(2.14567)).toBe(2.15);
        expect(currencyRound(2.14367)).toBe(2.14);
    });
})