import React, { Component } from "react";
import { connect } from "react-redux";

import { currencyRound } from "../../utils";

class CartSummary extends Component {

    // calculates the values needed to create the cart summary
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

    // constructs a jsx list of tax rates and values
    constructTaxSummary(tax_breakdown) {

        return Object.keys(tax_breakdown).map((id, key) => {

            const roundedTax = currencyRound(tax_breakdown[id]);
            return (
                <div key={key} className="tax-rate">
                    <div className="label">{ id }%</div>
                    <div className="value">{ roundedTax }&euro;</div>
                </div>                
            );
        });
    }

    render() {
        const cartSummary = this.calculateSummary(this.props.cartContent);
        const { net_total, gross_total, tax_breakdown } = cartSummary;

        return (
            <div className="cart-summary">

                <div className="net-total">
                    <div className="label">Net Total</div>
                    <div className="value">{ currencyRound(net_total) }&euro;</div>
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

const mapStateToProps = state => ({
    cartContent: state.cartContent
});

export default connect(mapStateToProps)(CartSummary);