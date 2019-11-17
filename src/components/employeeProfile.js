import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchCurrentEmployee, editCurrentEmployee } from "../actions/login_employee_action";
import Editcurrentemployeemodal from "./editCurrentEmployeeModal";

import Articlebyauthor from "./articleByAuthor";
import Message from "./messageDisplay";

class Currentemployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            editCurrentEmployeeModal: false,
            email: "",            
            username: "",
            bio: "",
            image: "",
            password: "",
            loginemployee: [],
            message: ""
        }
        this.closeEditCurrentEmployeeModal = this.closeEditCurrentEmployeeModal.bind(this);
        this.toggleEditCurrentEmployeeModal = this.toggleEditCurrentEmployeeModal.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.handleCurrentEmployeeEdit = this.handleCurrentEmployeeEdit.bind(this);
        
    }

    toggleEditCurrentEmployeeModal() {
        this.setState({            
            editCurrentEmployeeModal: !this.state.editCurrentEmployeeModal            
        });
    }

    closeEditCurrentEmployeeModal() {
        this.setState({
            editCurrentEmployeeModal: !this.state.editCurrentEmployeeModal
        })
    }

    componentWillMount() {        
        this.props.fetchCurrentEmployee();
    }    
    
    componentWillReceiveProps(props) {        
        this.setState({
            loginemployee: props.EmployeeAuth,
            message: props.APIresponse
        })        
    }
    closeMessage() {          
        this.setState({
            message:""
        })
    }

    handleCurrentEmployeeEdit(currentemployees) {
        debugger;               
        this.props.editCurrentEmployee(currentemployees);
        setTimeout(() => {           
            this.props.fetchCurrentEmployee();
            this.setState({
                loginemployee: this.props.EmployeeAuth,
                message: this.props.APIresponse
            })
        }, 1000);
        this.closeEditCurrentEmployeeModal();
        setTimeout(() => {            
            this.setState({                
                message: ""
            })
        }, 5000);
    }
        
    render() {   
        const loginemployee = this.state.loginemployee;
        return (
            <section>
                <div className="profile_section">
                    <div className="content">
                        <button onClick={() => this.toggleEditCurrentEmployeeModal()} className="btn btn-primary edit_employee">Edit</button>
                        <div className="profile_image">
                            {
                                loginemployee.image == null ?
                                    <img src="http://chittagongit.com/images/dummy-icon/dummy-icon-7.jpg" alt="" />
                                    : <img src={loginemployee.image} alt="" />
                            }
                        </div>
                        <div className="username">
                            {loginemployee.username}
                        </div>
                        <div className="email">
                            {loginemployee.email}
                        </div>
                        <p>{loginemployee.bio}</p>
                    </div>
                </div>

                <Editcurrentemployeemodal
                    open={this.state.editCurrentEmployeeModal}
                    close={this.closeEditCurrentEmployeeModal}
                    id={loginemployee.id}
                    email={loginemployee.email}
                    username={loginemployee.username}
                    bio={loginemployee.bio}
                    image={loginemployee.image}
                    password={loginemployee.password}
                    editaction={this.handleCurrentEmployeeEdit}
                />
                
                <Articlebyauthor
                    user={this.state.loginemployee.username}
                />

                <div>
                    <Message
                        message={this.state.message}
                        closemessage={this.closeMessage}
                    />
                </div>

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        EmployeeAuth: state.EmployeeAuth.crtemployee,
        APIresponse: state.APIresponse.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            fetchCurrentEmployee: fetchCurrentEmployee,
            editCurrentEmployee: editCurrentEmployee
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Currentemployee);
