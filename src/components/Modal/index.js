import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { closeModal } from "../../actions";
import Button from "../shared/Button";

import ModalForm from "./ModalForm" ;

export class Modal extends Component {
    render() {
        const { closeModal, isModalShown } = this.props;

        if(!isModalShown) {
            return null;
        }

        const renderContent = (
            <div className="modal">
                <div className="modal-panel">
                    <ModalForm />
                    <Button
                        action={ closeModal }
                        className="close-modal-button"
                        label="Close"
                    />
                </div>
            </div>
        )

        const renderTarget = document.querySelector("#modalRoot");

        return ReactDOM.createPortal(
            renderContent,
            renderTarget
        );
    }
}

const mapStateToProps = state => ({
    isModalShown: state.isModalShown
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);