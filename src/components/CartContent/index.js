import React, { Component } from "react";
import { connect } from "react-redux";

import CartContentHeader from "./CartContentHeader";
import CartItems from "./CartItems";

class CartContent extends Component {
    render() {
        return (
            <div className="cart-content">
                <CartContentHeader />
                <CartItems itemList={this.props.cartContent}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cartContent: state.cartContent
    }
}

export default connect(mapStateToProps)(CartContent);