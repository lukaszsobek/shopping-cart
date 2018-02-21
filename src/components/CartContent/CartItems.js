import React from "react";
import CartItem from "./CartItem";

const CartItems = props => {
        const { cartContent, deleteItem, openEditItemModal } = props;

        if(!cartContent.length) {
            return (
                <div className="no-items">
                    Add an item to the cart
                </div>
            )
        }

        return cartContent.map((item, key) =>{
            return (
                <CartItem
                    key={ key }
                    id={ key }
                    number={ key + 1}
                    name={ item.name }
                    comments={ item.comments }
                    net_price={ item.net_price }
                    tax={ item.tax }
                    deleteItem={ deleteItem }
                    openEditItemModal={ openEditItemModal }
                />
            );
        });
};

export default CartItems;