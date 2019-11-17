import React from "react";

//import { connect } from "react-redux";
//import { bindActionCreators } from "redux";

import Textarea from "./textarea";

//import { createComments } from "../actions/articles_action";

class Addcomment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            slug:""
        }
        //this.handleChange = this.handleChange.bind(this);
        //this.submitComment = this.submitComment.bind(this);
    }   

    //handleChange(e) {
    //    this.setState({
    //        comment: e.target.value
    //    })
    //}

    //submitComment(e) {
    //    debugger;
    //    e.preventDefault();
    //    const commentdata = {
    //        comment: this.state.comment,
    //        slug: this.props.slug
    //    }
    //    this.props.createComments(commentdata);
    //}
    
    render() {
        //debugger;
        const user = localStorage.getItem("crntuser");
        return (
            <section>
                {
                    user !== null ?
                        <form>
                            <div className="form-group">
                                <label className="form-label">Your Comment:</label>
                                <Textarea
                                    className="form-control"
                                    name="body"
                                    content={this.props.comment}
                                    controlFunc={this.props.actionChange}
                                    placeholder="Comment"
                                />
                            </div>
                            <button onClick={this.props.actionSubmit} className="btn btn-primary">Post Comment</button>
                        </form>
                        : "Please login to comment."
                }
                
            </section>
        )
    }
}

//export const mapStateToProps = (state) => {
//    return {
//        ArticleByTag: state.ArticleByTag.data
//    }
//}
//const mapDispatchToProps = (dispatch) => {
//    return bindActionCreators(
//        {
//            createComments: createComments            
//        },
//        dispatch
//    )
//}





export default Addcomment;
