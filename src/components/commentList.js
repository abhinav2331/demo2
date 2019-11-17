import React from "react";
import moment from "moment";

//import { connect } from "react-redux";
//import { bindActionCreators } from "redux";

//import { getComments } from "../actions/articles_action";

class Commentlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            slug: "",
            Comment: []
        }
    }

    //componentDidMount() {
    //    debugger;
    //    const commentslug = {
    //        slug: this.props.slug
    //    }
    //    this.props.getComments(commentslug);
    //}
    //componentWillReceiveProps(props) {
    //    this.setState({
    //        Comment: props.ArticleComment
    //    })
    //}

    render() {   
        
        return (
            <section>
                {
                    this.props.commentdata.map((item, index) => {
                        debugger;
                        const thedate = moment(item.createdAt).format("DD-MM-YYYY");
                        const artAuthor = item.author.username;
                        const User = localStorage.getItem('crntuser');
                        const crtUser = User.slice(1, -1);
                        const Ischeck = artAuthor === crtUser;
                        return (
                            <div className="card" key={index}>
                                <div className="card-block">
                                    {item.body}
                                </div>
                                <div className="card-footer">
                                    <a className="comment-author" href="">
                                        <img src={item.author.image} className="comment-author-img" alt={item.author.username} />
                                    </a>
                                    <span>{item.author.username} - ({thedate})</span>                                                                       

                                    {
                                        Ischeck === true ? <span className="mod-options"><i onClick={() => this.props.deleteAction(item)} className="fa fa-trash"></i></span> : ""
                                    }                                    
                                </div>
                            </div>
                        )
                    })
                }


            </section>
        )
    }
}

//export const mapStateToProps = (state) => {
//    return {
//        ArticleComment: state.ArticleComment.data
//    }
//}
//const mapDispatchToProps = (dispatch) => {
//    return bindActionCreators(
//        {
//            getComments: getComments
//        },
//        dispatch
//    )
//}


export default Commentlist;
