import React from "react";

export const Editreason = (props) => {
    return (
        <section>            
            {props.edit
                ? <textarea
                    onChange={props.handleReasonChange}
                    className="form-input"
                    value={props.content}
                    rows="6"
                />
                : <p>{props.content}</p>}
            <div>
                {props.edit ? <Savebutton updateReason={props.updateReason} /> : <Editbutton toggleEdit={props.toggleEdit} />}
            </div>
        </section>
    );
}

const Editbutton = (props) => {
    return (
        <button
            onClick={props.toggleEdit}
            className="btn btn-primary">
            Edit
        </button>
    );
}

const Savebutton = (props) => {
    return (
        <button
            onClick={props.updateReason}
            className="btn btn-primary">
            Save
    </button>
    );
}
