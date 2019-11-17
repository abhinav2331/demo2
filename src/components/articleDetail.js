import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

import { getArticleBySlug, deleteArticleData, createComments, getComments, deleteComments, editArticleData } from "../actions/articles_action";

import Editarticlemodal from "./editArticleModal";
import Addcomment from "./addComment";
import Commentlist from "./commentList";
import Message from "./messageDisplay";


class Articledetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: "",
            Byslugarticle: [],
            Author: [],
            editArticleModal: false,
            currentuser: "",
            currTags: [],
            Comment: [],
            comment: "",
            commentId: "",
            articleEditApiResponse: "",
            commentpostedApiResponse: ""
        }
        this.toggleEditArticleModal = this.toggleEditArticleModal.bind(this);
        this.closeEditArticleModal = this.closeEditArticleModal.bind(this);
        this.handleDeleteArticleModal = this.handleDeleteArticleModal.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.handleEditArticleModal = this.handleEditArticleModal.bind(this);
        this.closeArticleMessage = this.closeArticleMessage.bind(this);
        
    }

    toggleEditArticleModal() {
        this.setState({
            editArticleModal: !this.state.editArticleModal
        });
    }

    closeEditArticleModal() {
        this.setState({
            editArticleModal: !this.state.editArticleModal
        })
    }

    componentWillMount() {
        this.setState({
            slug: this.props.location.pathname.slice(9)
        })
    }

    componentDidMount() {
        debugger;
        const clickedslug = this.state.slug;
        this.props.getArticleBySlug(clickedslug);

        const commentslug = {
            slug: this.state.slug
        }
        this.props.getComments(commentslug);
    }

    componentWillReceiveProps(props) {        
        this.setState({
            Byslugarticle: props.ArticleByTag.articlebyslug,
            Author: props.ArticleByTag.articlebyslug.author,
            currTags: props.ArticleByTag.articlebyslug.tagList,
            Comment: props.ArticleComment,
            articleEditApiResponse: props.APIresponse.data,
            commentpostedApiResponse: props.APIresponse.data2
        })
    }
    

    handleDeleteArticleModal(e) {        
        e.preventDefault();
        const deleteData = {
            slug: this.state.slug
        };
        this.props.deleteArticleData(deleteData);

    } 

    submitComment(e) {        
        e.preventDefault();
        //const clickedslug = this.state.slug;
        const commentdata = {
            comment: this.state.comment,
            slug: this.state.slug
        }
        this.props.createComments(commentdata);

        setTimeout(() => {
            const commentslug = {
                slug: this.state.slug
            }
            this.props.getComments(commentslug);
            this.setState({
                Comment: this.props.ArticleComment,
                commentpostedApiResponse: this.props.APIresponse.data2,
                comment: ""
            });            
        }, 1000);
        setTimeout(() => {
            this.setState({
                commentpostedApiResponse: ""                
            })
        }, 5000);


    }  
    
    handleChange(e) {        
        this.setState({
            comment: e.target.value
        })
    }
    handleDeleteComment(item) {
        //debugger;
        const deleteCommentData = {
            slug: this.state.slug,
            commentId: item.id
        };
        this.props.deleteComments(deleteCommentData);

        setTimeout(() => {
            const commentslug = {
                slug: this.state.slug
            }
            this.props.getComments(commentslug);
            this.setState({
                Comment: this.props.ArticleComment
            });

        }, 1000);         
        
    }

    handleEditArticleModal(editData) {
        //debugger;            
        this.props.editArticleData(editData);        
        setTimeout(() => {            
            this.setState({
                Byslugarticle: this.props.ArticleByTag.articlebyslug,
                articleEditApiResponse: this.props.APIresponse.data
            });
            const clickedslug = this.state.slug;
            this.props.getArticleBySlug(clickedslug);
        }, 1000);
        this.closeEditArticleModal();
        setTimeout(() => {
            this.setState({
                articleEditApiResponse: ""
            })
        }, 5000);
        
    }
    
    closeArticleMessage() {
        this.setState({
            articleEditApiResponse: "",
            commentpostedApiResponse: ""
        })
    }
         

    render() {
        
        const user = localStorage.getItem("crntuser");
        const user2 = user.slice(1, -1);
        const articleAuthor = this.state.Author.username;

        //console.log("**************");
        //console.log("user2:" + user2);
        //console.log("articleAuthor:" + articleAuthor);
        
        const thedate = moment(this.state.Byslugarticle.createdAt).format("DD-MM-YYYY");
        return (
            <section>
                <div className="banner">
                    <h1>Article Title: {this.state.Byslugarticle.title}</h1>

                    <div className="article-meta">
                        <a href="/@abhinavkatiyar">
                            {
                                this.state.Author.image === "" ? <img src="http://chittagongit.com/images/dummy-icon/dummy-icon-7.jpg" alt="" />
                                    : <img src={this.state.Author.image} alt="user" />
                            }
                        </a>
                        <div className="info"><a className="author" href="/@abhinavkatiyar">{this.state.Author.username}</a><span className="date">{thedate}</span></div>
                        {
                            user2 === articleAuthor ?
                                <span>
                                    <a style={{ marginRight: "20px" }} onClick={this.toggleEditArticleModal} className="btn btn-outline-secondary btn-sm">
                                        <i className="ion-edit"></i> Edit Article</a>

                                    <button onClick={this.handleDeleteArticleModal} className="btn btn-outline-danger btn-sm">
                                        <i className="ion-trash-a"></i> Delete Article</button>
                                </span>
                                : ""
                        }
                    </div>

                </div>

                <div>
                    Article Body:{this.state.Byslugarticle.body}<br />
                    Article Description:{this.state.Byslugarticle.description}
                </div>
                <hr />
                <div>
                    <ul className="tag-list">
                        {
                            this.state.currTags.map((listTag, index) => {
                                return (
                                    <li>
                                        {listTag}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <hr />

                <div className="comment_panel">
                    <Addcomment
                        slug={this.state.slug}
                        actionSubmit={this.submitComment}
                        actionChange={this.handleChange}
                        comment={this.state.comment}
                    />
                    <Commentlist                        
                        commentdata={this.state.Comment}
                        deleteAction={this.handleDeleteComment}
                    />
                </div>

                <Editarticlemodal
                    open={this.state.editArticleModal}
                    close={this.closeEditArticleModal}
                    articledata={this.state.Byslugarticle}
                    articleeditaction={this.handleEditArticleModal}
                />

                <div>
                    <Message
                        articleEditApiResponse={this.state.articleEditApiResponse}
                        closemessage={this.closeArticleMessage}
                    />
                    <Message
                        commentpostApiResponse={this.state.commentpostedApiResponse}
                        closemessage={this.closeArticleMessage}
                    />
                </div>

            </section>
        )
    }
}


export const mapStateToProps = (state) => {
    return {
        ArticleByTag: state.ArticleByTag,
        ArticleComment: state.ArticleComment.data,
        Createcomment: state.Createcomment.data,
        APIresponse: state.APIresponse
        //APIresponse: state.APIresponse.data2
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getArticleBySlug: getArticleBySlug,
            deleteArticleData: deleteArticleData,
            createComments: createComments,
            getComments: getComments,
            deleteComments: deleteComments,
            editArticleData: editArticleData
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Articledetail);