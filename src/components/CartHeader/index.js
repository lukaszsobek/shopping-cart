import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../shared/Button";
import { clearAll, openAddItemModal } from "../../actions";

class CartHeader extends Component {

    render() {
        return (
            <div className="top-bar">
            
                <div className="app-title">
                    Shopping cart
                </div>

                <div className="button-container">

                    <Button
                        className="clear-cart"
                        action={ this.props.clearAll }
                        label="Clear Cart"
                    />

                    <Button
                        className="add-item"
                        action={ this.props.openAddItemModal }
                        label="Add Product"
                    />

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    clearAll: () => dispatch(clearAll()),
    openAddItemModal: () => dispatch(openAddItemModal())
});

export default connect(null, mapDispatchToProps)(CartHeader);