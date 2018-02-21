import React, { Component } from "react";
import { connect } from "react-redux";

import CartContentHeader from "./CartContentHeader";
import CartItems from "./CartItems";

import { deleteItem, openEditItemModal } from "../../actions";

class CartContent extends Component {
    render() {
        const { cartContent, deleteItem, openEditItemModal } = this.props;

        return (
            <div className="cart-content">
                <CartContentHeader />
                <CartItems
                    cartContent={ cartContent }
                    deleteItem={ deleteItem }
                    openEditItemModal={ openEditItemModal }
                />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    cartContent: state.cartContent
});

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    openEditItemModal: item => dispatch(openEditItemModal(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(CartContent);