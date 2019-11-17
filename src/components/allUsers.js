import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Editreason } from "./editReason";
import updateReason from "../actions/update_reason_action";
import deleteUser from "../actions/delete_user_action";

class Allusers extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {
            editReason: false,
            reason: props.user.reason
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
        this.handleUpdateReason = this.handleUpdateReason.bind(this);
        this.handleDeleteUser = this.handleDeleteUser.bind(this);
    }

    //Toggle fields for edit
    toggleEdit() {        
        this.setState({
            editReason: !this.state.editReason
        })
    }
    //Handle reason change
    handleReasonChange(e) {
        this.setState({
            reason: e.target.value
        });
    }
    //Handle Update info
    handleUpdateReason() {
        const update = {            
            reason: this.state.reason
        }
        this.props.updateReason(update);
        this.toggleEdit();
    }
    //Handle delete user
    handleDeleteUser() {        
        this.props.deleteUser(this.props.user);
    }
    
    render() {
        return (
            <section>
                <section className="card">
                    <div className="card-header">
                        <div className="card_action">                            
                            <button className="btn btn-primary"
                                 onClick={this.handleDeleteUser}>Delete
                            </button>
                        </div>
                        <figure className="">
                            <img className="avtar_image" src={this.props.user.image} alt="" />
                        </figure>
                        <span className="card-title">{this.props.user.name}</span>
                    </div>
                    <div className="card-body">
                        <Editreason
                            toggleEdit={this.toggleEdit}
                            edit={this.state.editReason}
                            content={this.state.reason}
                            handleReasonChange={this.handleReasonChange}
                            updateReason={this.handleUpdateReason}
                        />

                        <p>{this.props.user.reward}</p>
                    </div>
                </section>
            </section>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateReason: updateReason,
        deleteUser: deleteUser
    }, dispatch);
}



export default connect(null, mapDispatchToProps)(Allusers);
