import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { addItem, closeModal } from "../../actions";

import ModalPanel from "./ModalPanel" ;

class Modal extends Component {
    render() {
        const { closeModal, isModalShown, panelType } = this.props;

        if(!isModalShown) {
            return null;
        }

        const renderContent = (
            <div className="modal">
                <ModalPanel
                    panelType={panelType}
                    closeModal={closeModal}
                />
            </div>
        )

        const renderTarget = document.querySelector("#modalRoot");

        return ReactDOM.createPortal(
            renderContent,
            renderTarget
        );
    }
}

const mapStateToProps = state => {
    return {
        availableProducts: state.availableProducts,
        isModalShown: state.isModalShown
    }
}

const mapDispatchToProps = dispatch =>  {
    return {
        addItem: () => dispatch(addItem()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);