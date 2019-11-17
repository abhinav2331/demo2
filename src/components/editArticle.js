import React from "react";
import Inputfield from "./inputField";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Editarticle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           EmpeditMessageStatus:"" 
        }        
        this.handleEmployeeEdit = this.handleEmployeeEdit.bind(this);        
    }
       
    closeEditEmployeeModal(index) {
        this.setState({
            editEmployeeModal: !this.state.editEmployeeModal
        });
    } 
    handleEmployeeEdit() {        
        const employees = {
            name: this.state.editEmployeeName,
            salary: this.state.editEmployeeSalary,
            age: this.state.editEmployeeAge,
            id: this.state.editEmployeeId
        };
        this.props.editEmployee(employees);        
        this.props.getEmployeeList();        
        this.props.close();
        
    }
    
    render() {
        return (
            <div className={`modal ${this.props.open ? 'active' : null}`}>()
                <div className="modal-overlay"></div>
                <div className="modal-container">
                    <div className="modal-header">
                        <button
                            onClick={this.props.close}
                            className="btn btn-clear float-right"></button>
                        <div className="modal-title"><h4>Edit Employee - {this.state.editEmployeeId}</h4></div>
                    </div>
                    <div className="modal-body"> 
                        <form>
                            <div className="form-group">
                                <label className="form-label">Employee Name:</label>
                                <Inputfield
                                    name="employee_name"
                                    inputType="text"
                                    content={this.state.editEmployeeName}
                                    controlFunc={this.handleEditEmployeeNameChange}
                                    placeholder="Employee Name"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Employee Salary:</label>
                                <Inputfield
                                    name="employee_salary"
                                    inputType="text"
                                    content={this.state.editEmployeeSalary}
                                    controlFunc={this.handleEditEmployeeSalaryChange}
                                    placeholder="Employee Salary"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Employee Age:</label>
                                <Inputfield
                                    name="employee_age"
                                    inputType="text"
                                    content={this.state.editEmployeeAge}
                                    controlFunc={this.handleEditEmployeeAgeChange}
                                    placeholder="Employee Age"
                                />
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            onClick={this.handleEmployeeEdit}
                            className="btn btn-primary">Save Employee</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {   
            getEmployeeList: getEmployeeList,
            editEmployee: editEmployee            
        },
        dispatch
    )
}


export default connect(null, mapDispatchToProps)(Editarticle);
