import React from "react";
import { connect } from "react-redux";

class Rewardlist extends React.Component {
    render() {
        return (
            <section className="card">
                <div className="card-title">Reward List</div>
                <hr />
                {
                    this.props.RewardList.map((rewa, index) => {
                        return (
                            <section className="rewards" key={index}>
                                {rewa.id} - {rewa.reward}                                
                            </section>
                        )
                    })
                }
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {        
        RewardList: state.RewardList
    }
}

export default connect(mapStateToProps, null)(Rewardlist);
