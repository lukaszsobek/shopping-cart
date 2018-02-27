import React from "react";
import Button from "../shared/Button";
import { currencyRound } from "../../utils";


const CartItem = (props) => {
    const {
        comments,
        deleteItem,
        id,
        name,
        net_price,
        number,
        openEditItemModal,
        tax
    } = props;

    const tax_string = `${tax}%`;
    const gross_price = net_price + ( net_price * tax / 100);

    return (
        <div className="cart-item">
            <div className="item-number">{ number }</div>
            <div className="cart-item-details">
                <div className="item-name">{ name }</div>
                <div className="item-comments">{ comments }</div>
                <div className="item-net-price">{ net_price }&euro;</div>
                <div className="item-tax">{ tax_string }</div>
                <div className="item-gross-price">{ currencyRound(gross_price) }&euro;</div> 
            </div>
            <div className="action-buttons">

                <Button
                    action={ () => openEditItemModal(id) }
                    className="edit-item-button"
                    label="..."
                />
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