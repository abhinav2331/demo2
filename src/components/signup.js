import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Inputfield from "./inputField";
import { signupEmployee } from "../actions/login_employee_action";
import { emailRegex, formValid } from "../constant/form.validation";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email: "",
            password: "",
            formErrors: {
                username:"",
                email: "",
                password: ""
            }
        }        
        this.handleOnChangeSignup = this.handleOnChangeSignup.bind(this);
        this.handleEmployeeSignup = this.handleEmployeeSignup.bind(this);
    }

    handleOnChangeSignup(e) {
        //Validation
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "username":
                formErrors.username = 
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value });
        //Validation end

        this.setState({
            [e.target.name]: e.target.value
        });
    }   

    handleEmployeeSignup(e) {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`--SUBMITTING-- Username: ${this.state.username}  Email: ${this.state.email}    Password: ${this.state.password}`);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }

        //debugger;
        const signupdetail = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        this.props.signupEmployee(signupdetail);
    }
    renderError() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <string>Oops! {this.props.errorMessage}</string>
                </div>
            );
        }
    }


    render() {
        const { formErrors } = this.state;
        return (
            <section className="loginForm">
                <div className="box_header">Sign Up</div>
                <form>
                    <div className="form-group">
                        <label>Username:</label>
                        <Inputfield
                            className={formErrors.email.length > 0 ? "error form-input" : "form-input"}
                            name="username"
                            inputType="text"
                            content={this.state.username}
                            controlFunc={this.handleOnChangeSignup}
                            placeholder="Username"
                        />
                        {formErrors.username.length > 0 && (
                            <span className="form_error">{formErrors.username}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Email address:</label>
                        <Inputfield
                            className={formErrors.email.length > 0 ? "error form-input" : "form-input"}
                            name="email"
                            inputType="email"
                            content={this.state.email}
                            controlFunc={this.handleOnChangeSignup}
                            placeholder="Email Id"
                        />
                        {formErrors.email.length > 0 && (
                            <span className="form_error">{formErrors.email}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <Inputfield
                            className={formErrors.email.length > 0 ? "error form-input" : "form-input"}
                            name="password"
                            inputType="password"
                            content={this.state.password}
                            controlFunc={this.handleOnChangeSignup}
                            placeholder="Password"
                        />
                        {formErrors.password.length > 0 && (
                            <span className="form_error">{formErrors.password}</span>
                        )}
                    </div>
                    {this.renderError()}
                    <button type="submit" onClick={this.handleEmployeeSignup} className="btn btn-primary">Submit</button>
                </form>

            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        EmployeeAuth: state.EmployeeAuth,
        errorMessage: state.EmployeeAuth.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            signupEmployee: signupEmployee
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);