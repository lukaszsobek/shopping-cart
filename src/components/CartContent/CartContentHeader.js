import React from "react";

const CartContentHeader = () => {
    return (
        <div className="cart-content-header">
            <div className="item-number">#</div>
            <div className="item-name">Name</div>
            <div className="item-comments">Comments</div>
            <div className="item-net-price">Price</div>
            <div className="item-tax">Tax</div>
            <div className="item-gross-price">Total Item</div>
        </div>
    )
};

export default CartContentHeader;