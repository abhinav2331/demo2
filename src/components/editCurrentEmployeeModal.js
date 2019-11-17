import React from "react";

import { connect } from "react-redux";
//import { bindActionCreators } from "redux";

import Inputfield from "./inputField";
import Textarea from "./textarea";
//import { editCurrentEmployee } from "../actions/login_employee_action";
//import { fetchCurrentEmployee } from "../actions/login_employee_action";

class Editcurrentemployeemodal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {            
            email: "",
            username: "",
            bio: "",
            image: ""            
        }
        this.handleOnChange = this.handleOnChange.bind(this);    
        //this.handleCurrentEmployeeEdit = this.handleCurrentEmployeeEdit.bind(this);
    }
    componentWillReceiveProps(props) {
        this.setState({
            email: props.email,
            username: props.username,
            bio: props.bio,
            image: props.image            
        })
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    //handleCurrentEmployeeEdit(e) {        
    //    e.preventDefault();
    //    const currentemployees = {
    //        email: this.state.email,
    //        username: this.state.username,
    //        bio: this.state.bio,
    //        image: this.state.image            
    //    };       

    //    this.props.editCurrentEmployee(currentemployees);

    //    setTimeout(() => {
    //        alert(0);
    //        this.props.fetchCurrentEmployee();
    //        this.setState({
    //            loginemployee: props.EmployeeAuth
    //        })
    //    }, 3000);

    //    this.props.close();         
        
    //}
    
    render() {
        debugger;
        const currentemployees = {
            email: this.state.email,
            username: this.state.username,
            bio: this.state.bio,
            image: this.state.image
        };
        return (
            <section>
                <div className={`modal ${this.props.open ? 'active' : null}`}>()
                <div className="modal-overlay"></div>
                    <div className="modal-container">
                        <div className="modal-header">
                            <button
                                onClick={this.props.close}
                                className="btn btn-clear float-right"></button>
                            <div className="modal-title"><h4>Edit Employee {this.props.id}</h4></div>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label className="form-label">Employee Name:</label>
                                    <Inputfield
                                        className="form-control"
                                        name="email"
                                        inputType="email"
                                        content={this.state.email}
                                        controlFunc={this.handleOnChange}
                                        placeholder="Employee Email"                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Employee Username:</label>
                                    <Inputfield
                                        className="form-control"
                                        name="username"
                                        inputType="text"
                                        content={this.state.username}
                                        controlFunc={this.handleOnChange}
                                        placeholder="Employee Username"                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Employee Bio:</label>
                                    <Textarea
                                        className="form-control"
                                        name="bio"                                        
                                        content={this.state.bio}
                                        controlFunc={this.handleOnChange}
                                        placeholder="Employee Bio"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Employee Image:</label>
                                    <Inputfield
                                        className="form-control"
                                        name="image"
                                        inputType="text"
                                        content={this.state.image}
                                        controlFunc={this.handleOnChange}
                                        placeholder="Employee Image"
                                    />                                   
                                    
                                </div>
                                <div className="image_preview">
                                    <img src={this.state.image} alt="" />
                                </div>                                

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={() => this.props.editaction(currentemployees) }
                                className="btn btn-primary">Save Employee</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        EmployeeAuth: state.EmployeeAuth.editEmployee
    }
}

//const mapDispatchToProps = (dispatch) => {
//    return bindActionCreators(
//        {            
//            editCurrentEmployee: editCurrentEmployee
//        },
//        dispatch
//    )
//}


export default connect(mapStateToProps, null)(Editcurrentemployeemodal);