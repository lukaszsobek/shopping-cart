import React from "react";

const CartItem = (props) => {
    const { number, name, comments, net_price, tax } = props;
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
        </div>
    );
};

export default CartItem;