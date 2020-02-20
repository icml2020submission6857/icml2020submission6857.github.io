import React from "react";

import './ToggleButton.css'

function ToggleButton(props) {
    let id = props.id;
    let handleClick = props.onClick;

    return (
        <div className="toggle-button">
            <input type="checkbox" id={id} className="checkbox"
                   onChange={handleClick} defaultChecked />
            <label htmlFor={id} className="switch" />
        </div>
    );
}

export default ToggleButton;
