import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import getUsersList from "../actions/get_all_users_action";
import getAllRewards from "../actions/get_all_rewards_action";
import getEmployeeList from "../actions/get_employee.list_action";
import addUser from "../actions/add_user_action";
import { fetchCurrentEmployee } from "../actions/login_employee_action";


import Allusers from "./allUsers";
import Rewardlist from "./rewardList";
import Allemployee from "./allEmployee";
import Addusermodal from "./addUserModal";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            newPersonName: '',
            newPersonReason: '',
            newPersonReward: '',
            newPersonEyes: '',
            newPersonNose: '',
            newPersonMouth: '',
            newPersonSkin: '#CE96FF'
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleNewPersonNameChange = this.handleNewPersonNameChange.bind(this);
        this.handleNewPersonReasonChange = this.handleNewPersonReasonChange.bind(this);
        this.handleNewPersonRewardChange = this.handleNewPersonRewardChange.bind(this);
        this.handleNewPersonEyeChange = this.handleNewPersonEyeChange.bind(this);
        this.handleNewPersonNoseChange = this.handleNewPersonNoseChange.bind(this);
        this.handleNewPersonMouthChange = this.handleNewPersonMouthChange.bind(this);
        this.handleSkinChange = this.handleSkinChange.bind(this);
        this.handlePersonCreation = this.handlePersonCreation.bind(this);
    }
    //Toggle Modal
    toggleModal() {
        this.setState({
            openModal: !this.state.openModal
        })
    }
    handleNewPersonNameChange(e) {
        this.setState({
            newPersonName: e.target.value
        });
    }
    handleNewPersonReasonChange(e) {
        this.setState({
            newPersonReason: e.target.value
        });
    }
    handleNewPersonRewardChange(e) {
        this.setState({
            newPersonReward: e.target.value
        });
    }
    handleNewPersonEyeChange(e) {
        this.setState({
            newPersonEyes: e.target.value
        });
    }
    handleNewPersonNoseChange(e) {
        this.setState({
            newPersonNose: e.target.value
        });
    }
    handleNewPersonMouthChange(e) {
        this.setState({
            newPersonMouth: e.target.value
        });
    }
    handleSkinChange(e) {
        this.setState({
            newPersonSkin: e.target.value
        });
    }
    handlePersonCreation() {
        const users = {
            name: this.state.newPersonName,
            image: `https://api.adorable.io/avatars/face/eyes${this.state.newPersonEyes}/nose${this.state.newPersonNose}/mouth${this.state.newPersonMouth}/${this.state.newPersonSkin.slice(1)}`,
            reason: this.state.newPersonReason,
            reward: this.state.newPersonReward
        };
        this.props.addUser(users);
    }
    componentDidMount() {
        this.props.getUsersList();
        this.props.getAllRewards();
        this.props.getEmployeeList();
        this.props.fetchCurrentEmployee();
    }
    render() {
        return (
            <section>
                <div>
                    <button className="btn btn-primary" onClick={this.toggleModal}>Add User</button>
                </div>
                <div className="columns">                    
                    <div className="column col-md-6">
                        {
                            this.props.UserList.map(user => {
                                return <Allusers key={user.name} user={user} />;
                            })
                        }
                    </div>
                    <div className="column col-md-6">
                        <Rewardlist />
                        <Allemployee />
                    </div>
                </div>
                <Addusermodal
                    createUser={this.handlePersonCreation}
                    addToWantedList={this.handlePersonCreation}
                    skinTone={this.state.newPersonSkin}
                    onSkinChange={this.handleSkinChange}
                    onNoseChange={this.handleNewPersonNoseChange}
                    onMouthChange={this.handleNewPersonMouthChange}
                    onEyeChange={this.handleNewPersonEyeChange}
                    onRewardChange={this.handleNewPersonRewardChange}
                    onReasonChange={this.handleNewPersonReasonChange}
                    onNameChange={this.handleNewPersonNameChange}
                    name={this.state.newPersonName}
                    reason={this.state.newPersonReason}
                    reward={this.state.newPersonReward}
                    eyes={this.state.newPersonEyes}
                    nose={this.state.newPersonNose}
                    mouth={this.state.newPersonMouth}
                    open={this.state.openModal}                    
                    close={this.toggleModal}
                />
            </section>            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        UserList: state.UserList,
        RewardList: state.RewardList,
        EmployeeList: state.EmployeeList,
        EmpStatus: state.EmpStatus,
        EmployeeAuth: state.EmployeeAuth.crtemployee,
        authenticated: state.EmployeeAuth.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getUsersList: getUsersList,
            getAllRewards: getAllRewards,
            getEmployeeList: getEmployeeList,
            addUser: addUser,
            fetchCurrentEmployee: fetchCurrentEmployee
        },
        dispatch
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);