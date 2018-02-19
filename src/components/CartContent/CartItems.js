import React, { Component } from "react";
import CartItem from "./CartItem";

import { deleteItem } from "../../actions";

import { connect } from "react-redux";

class CartItems extends Component {

    render() {
        const { cartContent, deleteItem } = this.props;

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
                />
            );
        });

    }
};

function mapStateToProps(state) {
    return {
        cartContent: state.cartContent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteItem: item => dispatch(deleteItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);