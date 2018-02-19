import React from "react";

import CartItem from "./CartItem";

const CartItems = (props) => {
    return props.itemList.map((item, key) =>{
        return (
            <CartItem
                key={ key }
                number={ key + 1}
                name={ item.name }
                comments={ item.comments }
                net_price={ item.net_price }
                tax={ item.tax }
            />
        );
    });
};

export default CartItems;