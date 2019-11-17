import React from "react";
import Inputfield from "./inputField";


class Addemployeemodal extends React.Component {
    
    render() {
        return (
            <div className={`modal ${this.props.open ? 'active' : null}`}>
                <div className="modal-overlay"></div>
                <div className="modal-container">
                    <div className="modal-header">
                        <button
                            onClick={this.props.close}
                            className="btn btn-clear float-right"></button>
                        <div className="modal-title"><h4>Add Employee</h4></div>
                    </div>
                    <div className="modal-body"> 
                        <form>
                            <div className="form-group">
                                <label className="form-label">Employee Name:</label>
                                <Inputfield
                                    name="name"
                                    inputType="text"
                                    content={this.props.name}
                                    controlFunc={this.props.onChangeName}
                                    placeholder="Employee Name"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Employee Salary:</label>
                                <Inputfield
                                    name="salary"
                                    inputType="text"
                                    content={this.props.salary}
                                    controlFunc={this.props.onChangeSalary}
                                    placeholder="Employee Salary"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Employee Age:</label>
                                <Inputfield
                                    name="age"
                                    inputType="text"
                                    content={this.props.age}
                                    controlFunc={this.props.onChangeAge}
                                    placeholder="Employee Age"
                                />
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            onClick={this.props.createEmployee}
                            className="btn btn-primary">Create Employee</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Addemployeemodal;
