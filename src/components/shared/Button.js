import React from "react";

const Button = (props) => {
    const { action, className, label, type } = props;
    return (
        <button
            className={ className }
            onClick={ action }
            type={type}
        
        >{ label }</button>
    );
}

export default Button;
