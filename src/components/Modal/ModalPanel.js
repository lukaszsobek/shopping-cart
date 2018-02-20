import React from "react";

import Button from "../shared/Button";

const AddItem = (props) => {

    return (
        <div className="panel">
            Test


            <Button
                action={ props.closeModal }
                className="close-modal-button"
                label="Close"
            />
        </div>
    );
}

export default AddItem;