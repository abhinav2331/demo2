import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { signoutEmployee } from "../actions/login_employee_action";

class Signout extends React.Component {

    componentWillMount() {
        this.props.signoutEmployee();
    }

    render() {
        return (
            <div>Sorry to see you go ...</div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            signoutEmployee: signoutEmployee
        },
        dispatch
    )
}

export default connect(null, mapDispatchToProps)(Signout)
