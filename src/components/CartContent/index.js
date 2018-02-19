import React from "react";

import CartContentHeader from "./CartContentHeader";
import CartItems from "./CartItems";

const CartContent = () => {
        return (
            <div className="cart-content">
                <CartContentHeader />
                <CartItems />
            </div>
        );
};

export default CartContent;