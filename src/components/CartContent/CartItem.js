import React from "react";

import Button from "../shared/Button"

const CartItem = (props) => {
    const { id, number, name, comments, net_price, tax, deleteItem } = props;
    const tax_string = `${tax}%`;
    const gross_price = net_price + ( net_price * tax / 100);

    return (
        <div className="cart-item">
            <div className="item-number">{ number }</div>
            <div className="item-name">{ name }</div>
            <div className="item-comments">{ comments }</div>
            <div className="item-net-price">{ net_price }</div>
            <div className="item-tax">{ tax_string }</div>
            <div className="item-gross-price">{ gross_price }</div> 
            <div className="delete-item">
                <Button
                    action={ () => deleteItem(id) }
                    className="delete-item-button"
                    label="x"
                />
            </div>
        </div>
    );
};

export default CartItem;