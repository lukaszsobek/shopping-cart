import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../shared/Button";
import { clearAllItems, openAddItemModal } from "../../actions";

class CartHeader extends Component {

    render() {
        const { clearAllItems, openAddItemModal } = this.props

        return (
            <div className="top-bar">
            
                <div className="app-title">
                    Shopping cart
                </div>

                <div className="button-container">

                    <Button
                        className="clear-cart"
                        action={ clearAllItems }
                        label="Clear Cart"
                    />

                    <Button
                        className="add-item"
                        action={ openAddItemModal }
                        label="Add Product"
                    />

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    clearAllItems: () => dispatch(clearAllItems()),
    openAddItemModal: () => dispatch(openAddItemModal())
});

export default connect(null, mapDispatchToProps)(CartHeader);