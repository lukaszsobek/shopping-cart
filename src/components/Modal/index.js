import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { addItem } from "../../actions";

class Modal extends Component {
    render() {
        if(!this.props.isModalShown) {
            return null;
        }

        const renderContent = <div className="panel">Test</div>;
        const renderTarget = document.querySelector("#modalRoot");

        return ReactDOM.createPortal(
            <div className="modal">
             { renderContent }
            </div>,
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
        addItem: () => dispatch(addItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);