import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Inputfield from "./inputField";
import { loginEmployee } from "../actions/login_employee_action";
import { emailRegex, formValid } from "../constant/form.validation";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formErrors: {
                email: "",                
                password: ""
            }
        }
        
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleEmployeeLogin = this.handleEmployeeLogin.bind(this);
    }

    handleOnChange(e) {        
        //Validation
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
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

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
        //Validation end

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleEmployeeLogin(e) {
        e.preventDefault();
        //debugger;

        if (formValid(this.state)) {
            console.log(`--SUBMITTING--  Email: ${this.state.email}    Password: ${this.state.password}`);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }

        const logindetail = {
            email: this.state.email,
            password: this.state.password            
        };
        this.props.loginEmployee(logindetail);      

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

                <div className="box_header">Sign In</div>
                <form noValidate>
                    <div className="form-group">
                        <label>Email address:</label>                        
                        <Inputfield
                            className={formErrors.email.length > 0 ? "error form-input" : "form-input"}
                            name="email"
                            inputType="email"
                            content={this.state.email}
                            controlFunc={this.handleOnChange}
                            placeholder="Email Id"
                        />
                        {formErrors.email.length > 0 && (
                            <span className="form_error">{formErrors.email}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Password:</label>                        
                        <Inputfield
                            className={formErrors.password.length > 0 ? "error form-input" : "form-input"}
                            name="password"
                            inputType="password"
                            content={this.state.password}
                            controlFunc={this.handleOnChange}
                            placeholder="Password"
                        />
                        {formErrors.password.length > 0 && (
                            <span className="form_error">{formErrors.password}</span>
                        )}
                    </div>
                    {this.renderError()}
                    <button type="submit" onClick={this.handleEmployeeLogin} className="btn btn-primary">Submit</button>
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
            loginEmployee: loginEmployee
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);