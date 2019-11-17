import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Inputfield from "./inputField";
import Textarea from "./textarea";
import { addNewPost } from "../actions/login_employee_action";
import { formValid } from "../constant/form.validation";

class Addnewpost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            body: "",
            tagList: "",
            formErrors: {
                title: "",
                description: "",
                body: ""                
            }
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleaddNewPost = this.handleaddNewPost.bind(this);        
    }
    
    handleOnChange(e) {
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "title":
                formErrors.title = 
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            case "description":
                formErrors.description =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            case "body":
                formErrors.body =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;            
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleaddNewPost(e) {        
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`--SUBMITTING--  title: ${this.state.title}    description: ${this.state.description}`);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }

        const addPost = {
            title: this.state.title,
            description: this.state.description,
            body: this.state.body,
            tagList: this.state.tagList
        };
        this.props.addNewPost(addPost);
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
            <section className="article_section">
                <h3>Add new post:</h3>
                <form noValidate>
                    <div className="form-group">
                        <label className="form-label">Title:</label>
                        <Inputfield
                            className={formErrors.title.length > 0 ? "error form-input" : "form-input"}
                            name="title"
                            inputType="text"
                            content={this.state.title}
                            controlFunc={this.handleOnChange}
                            placeholder="Title"
                        />
                        {formErrors.title.length > 0 && (
                            <span className="form_error">{formErrors.title}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description:</label>
                        <Inputfield
                            className={formErrors.description.length > 0 ? "error form-input" : "form-input"}
                            name="description"
                            inputType="text"
                            content={this.state.description}
                            controlFunc={this.handleOnChange}
                            placeholder="Description"
                        />
                        {formErrors.description.length > 0 && (
                            <span className="form_error">{formErrors.description}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="form-label">Article Body:</label>
                        <Textarea
                            className={formErrors.body.length > 0 ? "error form-input" : "form-input"}
                            name="body"
                            content={this.state.body}
                            controlFunc={this.handleOnChange}
                            placeholder="Article Body"
                        />
                        {formErrors.body.length > 0 && (
                            <span className="form_error">{formErrors.body}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="form-label">Tags:</label>
                        <Inputfield
                            className="form-control"
                            name="tagList"
                            inputType="text"
                            content={this.state.tagList}
                            controlFunc={this.handleOnChange}
                            placeholder="Tags"
                        />
                    </div>  
                    {this.renderError()}

                    {
                        this.state.title === "" || this.state.body === "" || this.state.description === "" ? <button type="submit" onClick={this.handleaddNewPost} className="btn btn-primary disabled">Please Fill Above Fields</button>
                            : <button type="submit" onClick={this.handleaddNewPost} className="btn btn-primary">Create Article</button>
                    }
                    
                </form>

 

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        EmployeeAuth: state.EmployeeAuth.addnewpost
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addNewPost: addNewPost
        },
        dispatch
    )
}




export default connect(mapStateToProps, mapDispatchToProps)(Addnewpost);