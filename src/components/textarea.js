import React from "react";

const Textarea = (props) => (

    <textarea
        className={props.className}
        name={props.name}
        type={props.inputType}
        value={props.content}
        onChange={props.controlFunc}
        placeholder={props.placeholder}
    >
        </textarea>

);


export default Textarea;
