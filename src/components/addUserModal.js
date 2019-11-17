import React from "react";
import Inputfield from "./inputField";
import SelectFormElement from "./selectField";
import NewUserFace from "./addUserFace";


class Addusermodal extends React.Component {
    render() {
        return (
            <div className={`modal ${this.props.open ? 'active' : null}`}>
                <div className="modal-overlay"></div>
                <div className="modal-container">
                    <div className="modal-header">
                        <button
                            onClick={this.props.close}
                            className="btn btn-clear float-right"></button>
                        <div className="modal-title"><h4>Add User</h4></div>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label className="form-label">Name:</label>
                                <Inputfield
                                    name="name"
                                    inputType="text"
                                    content={this.props.name}
                                    controlFunc={this.props.onNameChange}
                                    placeholder="Name or known alias"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Reason:</label>
                                <Inputfield
                                    name="reason"
                                    inputType="text"
                                    content={this.props.reason}
                                    controlFunc={this.props.onReasonChange}
                                    placeholder="Reason"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Rewards:</label>
                                <Inputfield
                                    name="reward"
                                    inputType="text"
                                    content={this.props.reward}
                                    controlFunc={this.props.onRewardChange}
                                    placeholder="Rewards"
                                />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label className="form-label">Choose Eyes:</label>
                                        <SelectFormElement
                                            name="chooseeye"
                                            selectedOption={this.props.eyes}
                                            controlFunc={this.props.onEyeChange}
                                            placeholder="Choose Eyes"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Choose Nose:</label>
                                            <SelectFormElement
                                                name="choosenose"
                                                selectedOption={this.props.nose}
                                                controlFunc={this.props.onNoseChange}
                                                placeholder="Choose Nose"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Choose Mouth:</label>
                                            <SelectFormElement
                                                name="choosemouth"
                                                selectedOption={this.props.mouth}
                                                controlFunc={this.props.onMouthChange}
                                                placeholder="Choose Mouth"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label">Skin color:</label>
                                        <Inputfield
                                            name="color"
                                            inputType="color"
                                            content={this.props.skincolor}
                                            controlFunc={this.props.onSkinChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <NewUserFace
                                                eyes={this.props.eyes}
                                                nose={this.props.nose}
                                                mouth={this.props.mouth}
                                                skin={this.props.skinTone} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            onClick={this.props.createUser}
                            className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addusermodal;
