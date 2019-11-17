import React from "react";

import { connect } from "react-redux";
//import { bindActionCreators } from "redux";

import Inputfield from "./inputField";
import Textarea from "./textarea";

//import { editArticleData } from "../actions/articles_action";


class Editarticlemodal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            body: "",
            tagList: "",
            slug: ""
        }        
        //this.handleEditArticleModal = this.handleEditArticleModal.bind(this);   
        this.titleOnChange = this.titleOnChange.bind(this);
        this.descriptionOnChange = this.descriptionOnChange.bind(this);
        this.bodyOnChange = this.bodyOnChange.bind(this);
        this.tagListOnChange = this.tagListOnChange.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({           
            title: this.props.articledata.title,
            description: this.props.articledata.description,
            body: this.props.articledata.body,
            tagList: this.props.articledata.tagList,
            slug: this.props.articledata.slug
        })
    }
       
    closeEditEmployeeModal(index) {
        this.setState({
            editEmployeeModal: !this.state.editEmployeeModal
        });
    } 
    titleOnChange(e) {
        this.setState({
            title: e.target.value
        });
    }
    descriptionOnChange(e) {
        this.setState({
            description: e.target.value
        });
    }
    bodyOnChange(e) {
        this.setState({
            body: e.target.value
        });
    }
    tagListOnChange(e) {
        this.setState({
            tagList: e.target.value
        });
    }
    //handleEditArticleModal(e) {
    //    debugger;
    //    e.preventDefault();
    //    const editData = { 
    //        title: this.state.title,
    //        description: this.state.description,
    //        body: this.state.body,
    //        tagList: this.state.tagList,
    //        slug:this.state.slug
    //    };
    //    this.props.editArticleData(editData);
    //    this.props.close();          
    //}
    
    render() {        
        const editData = {
            title: this.state.title,
            description: this.state.description,
            body: this.state.body,
            tagList: this.state.tagList,
            slug: this.state.slug
        };
        return (
            <div className={`modal ${this.props.open ? 'active' : null}`}>()
                <div className="modal-overlay"></div>
                <div className="modal-container">
                    <div className="modal-header">
                        <button
                            onClick={this.props.close}
                            className="btn btn-clear float-right"></button>
                        <div className="modal-title"><h4>Edit Article -</h4></div>
                    </div>
                    <div className="modal-body"> 
                        <form>
                            <div className="form-group">
                                <label className="form-label">Title:</label>
                                <Inputfield
                                    className="form-control"
                                    name="title"
                                    inputType="text"
                                    content={this.state.title}
                                    controlFunc={this.titleOnChange}
                                    placeholder="Title"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Description:</label>
                                <Inputfield
                                    className="form-control"
                                    name="description"
                                    inputType="text"
                                    content={this.state.description}
                                    controlFunc={this.descriptionOnChange}
                                    placeholder="Description"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Article Body:</label>
                                <Textarea
                                    className="form-control"
                                    name="body"
                                    content={this.state.body}
                                    controlFunc={this.bodyOnChange}
                                    placeholder="Article Body"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Tags:</label>
                                <Inputfield
                                    className="form-control"
                                    name="tagList"
                                    inputType="text"
                                    content={this.state.tagList}
                                    controlFunc={this.tagListOnChange}
                                    placeholder="Tags"
                                />
                            </div>
                            
                            

                        </form>
                        
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => this.props.articleeditaction(editData)} className="btn btn-primary">Save Article</button>
                    </div>
                </div>
            </div>
        )
    }
}



export const mapStateToProps = (state) => {
    return {
        ArticleByTag: state.ArticleByTag.data
    }
}
//const mapDispatchToProps = (dispatch) => {
//    return bindActionCreators(
//        {
//            editArticleData: editArticleData            
//        },
//        dispatch
//    )
//}


export default connect(mapStateToProps, null)(Editarticlemodal);
