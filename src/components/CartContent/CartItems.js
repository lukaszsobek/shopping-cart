import React, { Component } from "react";
import CartItem from "./CartItem";

import { deleteItem, openEditItemModal } from "../../actions";

import { connect } from "react-redux";

class CartItems extends Component {

    render() {
        const { cartContent, deleteItem, openEditItemModal } = this.props;

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

    }
};

const mapStateToProps = state => ({
    cartContent: state.cartContent
});

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    openEditItemModal: item => dispatch(openEditItemModal(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);