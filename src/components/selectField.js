import React from "react";

const SelectFormElement = (props) => (
    <div className="selectdiv">
        <select
            name={props.name}
            onChange={props.controlFunc}
            className=""
            value={props.selectedOption}>
            <option value="">{props.placeholder}</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => {
                return <option key={num} value={num}>{num}</option>
            })}
            })}
        </select>
    </div>
);

export default SelectFormElement;
