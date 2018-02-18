import React, { Component } from "react";

const Button = (props) => {
    const { action, className, label } = props;
    return (
        <button
            className={ className }
            onClick={ action }>{ label }</button>
    );
}

export default class TopBar extends Component {

    clearCart() {
        console.log("clear");
    }

    addItem() {
        console.log("add item");
    }

    render() {
        return (
            <div className="top-bar">
            
                <div className="app-title">
                    Shopping cart
                </div>

                <div className="button-container">

                    <Button
                        className="clear-cart"
                        action={ this.clearCart }
                        label="Clear Cart"
                    />

                    <Button
                        className="add-item"
                        action={ this.addItem }
                        label="Add Product"
                    />

                </div>
            </div>
        );
    }
}