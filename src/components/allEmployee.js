import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Editemployeemodal from "./editEmployeeModal";
import Addemployeemodal from "./addEmployeeModal";
import addEmployee from "../actions/add_employee_action";
import editEmployee from "../actions/edit_employee_action";
import deleteEmployee from "../actions/delete_employee_action";
import getEmployeeList from "../actions/get_employee.list_action";

class Allemployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editEmployeeModal: false,
            requiredItem: 0,
            employeeModalData: "",
            addEmployeeModal: false,
            newEmployeeName: "",
            newEmployeeSalary: "",
            newEmployeeAge: "",
            Message: false
        }
        this.toggleEditEmployeeModal = this.toggleEditEmployeeModal.bind(this);
        this.closeEditEmployeeModal = this.closeEditEmployeeModal.bind(this);
        this.toggleAddEmployeeModal = this.toggleAddEmployeeModal.bind(this);
        this.closeaddEmployeeModal = this.closeaddEmployeeModal.bind(this);
        this.handleNewEmployeeNameChange = this.handleNewEmployeeNameChange.bind(this);
        this.handleNewEmployeeSalaryChange = this.handleNewEmployeeSalaryChange.bind(this);
        this.handleNewEmployeeAgeChange = this.handleNewEmployeeAgeChange.bind(this);
        this.handleEmployeeCreation = this.handleEmployeeCreation.bind(this);
        this.handleDeleteEmployee = this.handleDeleteEmployee.bind(this);

    }

    toggleEditEmployeeModal(index, empObj) {
        this.setState({
            requiredItem: index,
            editEmployeeModal: !this.state.editEmployeeModal,
            employeeModalData: empObj
        });
    }
    closeEditEmployeeModal(index) {
        this.setState({
            editEmployeeModal: !this.state.editEmployeeModal
        });
    }
    toggleAddEmployeeModal() {
        this.setState({
            addEmployeeModal: !this.state.addEmployeeModal
        })
    }
    closeaddEmployeeModal(index) {
        this.setState({
            addEmployeeModal: !this.state.addEmployeeModal
        });
    }
    handleNewEmployeeNameChange(e) {
        this.setState({
            newEmployeeName: e.target.value
        });
    }
    handleNewEmployeeSalaryChange(e) {
        this.setState({
            newEmployeeSalary: e.target.value
        });
    }
    handleNewEmployeeAgeChange(e) {
        this.setState({
            newEmployeeAge: e.target.value
        });
    }
    handleEmployeeCreation() {
        const employees = {
            name: this.state.newEmployeeName,
            salary: this.state.newEmployeeSalary,
            age: this.state.newEmployeeAge
        };
        this.props.addEmployee(employees);
        this.setState({
            addEmployeeModal: false
        });
        this.getEmployeeList();
    }
    //Handle delete Employee
    handleDeleteEmployee(index, empObj) {
        const employees = {
            name: empObj.employee_name,
            salary: empObj.employee_salary,
            age: empObj.employee_age,
            id: empObj.id,
        };
        this.props.deleteEmployee(employees);
        this.getEmployeeList();
    }

    render() {

        return (
            <section>

                <section className="card">
                    <button onClick={this.toggleAddEmployeeModal} className="btn btn-primary">Add Employee List</button>
                    <div className="spacer"></div>
                    <div className="card-title">Employee List <hr /></div>
                    <div className="card-body">
                        <table width="100%" cellPadding="0" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Employee Name</th>
                                    <th>Salary</th>
                                    <th>Age</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.EmployeeList.slice(0, 10).map((employee, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{employee.id}</td>
                                                <td>{employee.employee_name}</td>
                                                <td>{employee.employee_salary}</td>
                                                <td>{employee.employee_age}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => this.toggleEditEmployeeModal(index, employee)}>Edit</button>
                                                    <button className="btn btn-success" onClick={() => this.handleDeleteEmployee(index, employee)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
                <Editemployeemodal
                    open={this.state.editEmployeeModal}
                    close={this.closeEditEmployeeModal}
                    saveModalDetails={this.saveModalDetails}
                    empData={this.state.employeeModalData}
                />
                <Addemployeemodal
                    createEmployee={this.handleEmployeeCreation}
                    open={this.state.addEmployeeModal}
                    close={this.closeaddEmployeeModal}
                    onChangeName={this.handleNewEmployeeNameChange}
                    onChangeSalary={this.handleNewEmployeeSalaryChange}
                    onChangeAge={this.handleNewEmployeeAgeChange}
                    name={this.state.newEmployeeName}
                    salary={this.state.newEmployeeSalary}
                    age={this.state.newEmployeeAge}
                />
            </section>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        EmployeeList: state.EmployeeList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addEmployee: addEmployee,
            editEmployee: editEmployee,
            deleteEmployee: deleteEmployee,
            getEmployeeList: getEmployeeList
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Allemployee);
