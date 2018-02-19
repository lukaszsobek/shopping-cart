import React, { Component } from "react";
import { connect } from "react-redux";

import { currencyRound } from "../../utils";

class CartSummary extends Component {

    constructor(props) {
        super(props);
        this.cartSummary = this.calculateSummary(props.cartContent);
    }

    calculateSummary(itemArray) {

        const summaryObj = {
            net_total: 0,
            gross_total: 0,
            tax_breakdown: {}  
        };

        itemArray.forEach((item, key) => {
            const { tax, net_price } = item;

            summaryObj.net_total += net_price;

            summaryObj.gross_total += net_price + (net_price * tax / 100);

            // summary of tax rates
            summaryObj.tax_breakdown[tax] = summaryObj.tax_breakdown[tax] 
                ? summaryObj.tax_breakdown[tax] += net_price * tax / 100
                : summaryObj.tax_breakdown[tax] = net_price * tax / 100;
        });
        return summaryObj;
    }

    constructTaxSummary(tax_breakdown) {

        const outArr = [];

        for(const item in tax_breakdown) {

            const roundedTax = currencyRound(tax_breakdown[item]);

            outArr.push(
                <div className="tax-rate">
                    <div className="label">{ item }%</div>
                    <div className="value">{ roundedTax }&euro;</div>
                </div>
            );
        }
        return outArr;
    }

    render() {
        const { net_total, gross_total, tax_breakdown } = this.cartSummary;

        return (
            <div className="cart-summary">

                <div className="net-total">
                    <div className="label">Net Total</div>
                    <div className="value">{ net_total }&euro;</div>
                </div>

                {this.constructTaxSummary(tax_breakdown)}

                <div className="gross-total">
                    <div className="label">Grand Total</div>
                    <div className="value">{ currencyRound(gross_total) }&euro;</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cartContent: state.cartContent
    }
}

export default connect(mapStateToProps)(CartSummary);