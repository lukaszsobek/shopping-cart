import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../shared/Button";
import { addItem, updateItem, closeModal } from "../../actions";

export const ConstructDropdown = (props) => {

    const { productList } = props;

    const listOptions = productList.map((item, key) => {

        return (
            <option
                value={ key }
                key={ key }
            >{ item.name }</option>
        );
    })

    return (
        <select
            name={ props.name }
            className={ props.className }
        >
            {listOptions}
        </select>
    );
}

class ModalForm extends Component {

    componentDidMount() {
        const { editItemId, cartContent } = this.props;

        if(editItemId === null) {
            return;
        }
        this.isEditingItem = true;
        const { comments, sourceId } = cartContent[editItemId];

        // set selected element
        const selectEl = document.querySelector(".product-dropdown");
        selectEl.selectedIndex = sourceId;

        // set comments
        const inputEl = document.querySelector(".product-comment");
        inputEl.value = comments;
    }

    handleSubmit(e) {
        e.preventDefault();

        const {
            addItem,
            availableProducts,
            closeModal,
            editItemId,
            updateItem
        } = this.props;
        const { productComment, productDropdown }  = e.target.elements;
        const productIndex = productDropdown[productDropdown.selectedIndex].value;

        const item = {
            ...availableProducts[productIndex],
            comments: productComment.value,
            sourceId: productIndex
        }

       if(!this.isEditingItem) {
            addItem(item);
       } else {
           updateItem(editItemId,item);
       }

       closeModal();
    }

    render() {
        const { availableProducts, editItemId } = this.props;
        const cartLabel = editItemId === null
            ? "Add to Cart"
            : "Update item";

        return (
            <form
                id="modal-panel-form"
                name="modalPanelForm"
                onSubmit={ e => this.handleSubmit(e) }
            >
                <h3>{ cartLabel }</h3>

                <div className="product-selection-wrapper">
                    <label htmlFor="productDropdown">Product:</label><br/>
                    <ConstructDropdown
                        productList={ availableProducts }
                        selectedItem={ editItemId }
                        name="productDropdown"
                        id="productDropdown"
                        className="product-dropdown"
                    />
                </div>

                <div className="product-comment-wrapper">
                    <label htmlFor="productComment">Comment:</label><br/>
                    <input
                        name="productComment"
                        id="productComment"
                        className="product-comment"
                    />
                </div>

                <Button
                    className="add-item-button"
                    label={ cartLabel }
                />  
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        availableProducts: state.availableProducts,
        cartContent: state.cartContent,
        editItemId: state.editItemId
    }
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    updateItem: (itemId, item) => dispatch(updateItem(itemId, item)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(ModalForm);