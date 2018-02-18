import React from "react";

const Button = (props) => {
    const { action, className, label } = props;
    return (
        <button
            className={ className }
            onClick={ action }>{ label }</button>
    );
}

export default Button;
