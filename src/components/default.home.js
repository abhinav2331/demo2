import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Allarticles from "./allArticles";
import getAllArticles from "../actions/get_all_articles_action";

class Defaulthome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [{ title: 'Chicken', children: [{ title: 'Egg' }] }],
        };        
    }
    
    render() {
        debugger;
        console.log(this.props.AllArticles);
        return (
            <section className="default_section">
                <h4>Welcome to the Web API. <br />The core concept behind the Redux.</h4>
                <Allarticles />            
               
            </section>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        AllArticles: state.AllArticles.allarticle        
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getAllArticles: getAllArticles            
        },
        dispatch
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Defaulthome);