import React from "react";

import ToggleButton from "./ToggleButton";

import './SelectionLevel.css'

function SelectionLevel(props) {
    let currentSelect = props.currentSelect;
    let setCurrentSelect = props.setCurrentSelect;

    return (
        <nav className="level">
            {['garage', 'baselines'].map((item, index) => {
                return (
                    <div className="level-item has-text-centered" key={index}>
                        <div className="level-content">
                            <p className="heading level-content-heading">{item}</p>
                            <ToggleButton id={index} onClick={() => {
                                let newSelect = currentSelect.slice();
                                newSelect[index] = (newSelect[index]) ? 0 : 1;
                                setCurrentSelect(newSelect);
                            }} />
                        </div>
                    </div>
                );
            })}
        </nav>
    );
}

export default SelectionLevel;
