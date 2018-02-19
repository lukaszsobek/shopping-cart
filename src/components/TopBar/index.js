import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../shared/Button";
import { clearAll, addItem } from "../../actions";

class TopBar extends Component {

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
                        action={ this.props.addItem }
                        label="Add Product"
                    />

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearAll: () => dispatch(clearAll()),
        addItem: () => dispatch(addItem())
    };
};

export default connect(null, mapDispatchToProps)(TopBar);