import React, { useState } from 'react';

import './EnvsDropdown.css'

function EnvsDropdown(props) {
    let envs = props.envs;
    let currentEnv = props.currentEnv;
    let setCurrentEnv = props.setCurrentEnv;
    const [envsDropdownActive, setEnvsDropdown] = useState(false);

    return (
        <div className={"dropdown" + ((envsDropdownActive === true) ? " is-active": "")}>
            <div className="dropdown-trigger">
                <button className="button dropdown-button" aria-haspopup="true" aria-controls="dropdown-menu"
                        onClick={() => { setEnvsDropdown(!envsDropdownActive) }}>
                    <span>{currentEnv}</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"/>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {envs.map((item, index) => {
                        return(
                            <button className="dropdown-item button is-white"
                                    key={item}
                                    onClick={() => {
                                        setEnvsDropdown(false);
                                        setCurrentEnv(item);
                                    }}
                            >{item}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default EnvsDropdown;
