import { CartSummary } from "../";

describe("CartSummary",() => {


    it("calculates summary", () => {
        const props = [{
                tax: 5,
                net_price: 10
            },{
                tax: 5,
                net_price: 10
            },{
                tax: 10,
                net_price: 20
            }
        ];
        const testCartSummary = new CartSummary().calculateSummary(props);
        expect(testCartSummary.gross_total).toBe(43);
        expect(testCartSummary.net_total).toBe(40);
        expect(testCartSummary.tax_breakdown).toMatchObject({10: 2, 5: 1});
    });

    it("constructs summary",() => {
        const props = {10: 2, 5: 1}
        const testCartSummary = new CartSummary().constructTaxSummary(props);
        expect(testCartSummary).toMatchSnapshot();
    });

    it("renders component",() => {
        const props = {
            cartContent: [{
                tax: 5,
                net_price: 10
            },{
                tax: 5,
                net_price: 10
            },{
                tax: 10,
                net_price: 20
            }
        ]
        }
        const testCartSummary = new CartSummary(props).render();
        expect(testCartSummary).toMatchSnapshot();
    })
});