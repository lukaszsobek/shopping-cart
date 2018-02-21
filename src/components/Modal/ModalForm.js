import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../shared/Button";

import { addItem, closeModal } from "../../actions";

const ConstructDropdown = (props) => {

    const listOptions = props.productList.map((item, key) => {
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

    handleSubmit(e) {
        e.preventDefault();

        const { addItem, closeModal, availableProducts } = this.props;
        const { productComment, productDropdown }  = e.target.elements;

        const productIndex = productDropdown[productDropdown.selectedIndex].value;
        const newItem = {
            ...availableProducts[productIndex],
            comments: productComment.value
        }

        addItem(newItem);
        closeModal();

    }

    render() {
        const { availableProducts } = this.props;

        return (
            <form
                id="modal-panel-form"
                name="modalPanelForm"
                onSubmit={ e => this.handleSubmit(e) }
            >
                <ConstructDropdown
                    productList={ availableProducts }
                    name="productDropdown"
                    className="product-dropdown"
                />

                <div className="input-wrapper">
                    <label>Comment:</label><br/>
                    <input
                        name="productComment"
                        className="product-comment"
                    />
                </div>

                <Button
                    className="add-item"
                    label="Add to Cart"
                />  
            </form>
        )
    }
}

const mapStateToProps = state => ({
    availableProducts: state.availableProducts
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps,mapDispatchToProps)(ModalForm);