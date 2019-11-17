import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import moment from "moment";
import { Link } from "react-router-dom";

import { getArticleByAuthor } from "../actions/articles_action";

class Articlebyauthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            loggedinuser: "",
            articlebyauthor: [],
            Tag: []
        }       
    }
    
    componentWillReceiveProps(props) {        
        this.setState({
            loggedinuser: props.user,
            articlebyauthor: props.ArticleByTag
        })

        const username = this.state.loggedinuser;
        this.props.getArticleByAuthor(username);
    }
    

    render() {
        return (
            <section className="content" style={{ marginTop: "50px" }}>
                <div style={{ marginBottom: "10px" }}>
                    <button className="btn btn-primary">My Articles</button>
                </div>
                <div className="row">
                    <div className="col-md-12">{this.state.articlebyauthor.map((abitem, index) => {
                        const thedate = moment(abitem.createdAt).format("DD-MM-YYYY");
                        return (
                            <div className="article-preview" key={index}>
                                <div className="article-meta">
                                    <a href="/@abhinavkatiyar">
                                        {
                                            abitem.author.image === "" ? <img src="http://chittagongit.com/images/dummy-icon/dummy-icon-7.jpg" alt="" />
                                                : <img src={abitem.author.image} alt="user" />
                                        }
                                    </a>
                                    <div className="info"><a className="author" href="/@abhinavkatiyar">{abitem.author.username}</a><span className="date">{thedate}</span></div>
                                </div>
                                <Link className="preview-link" to={`/article/${abitem.slug}`} >
                                    <h1>{abitem.title}</h1>
                                    <p>{abitem.body}</p>
                                    <span className="readmore">Read more...</span>
                                    <ul className="tag-list">
                                        {abitem.tagList.map((tagitem, index) => {
                                            return (
                                                <li key={index}>
                                                    {tagitem}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </Link>
                            </div>
                        )
                    })}</div>

                    
                </div>

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ArticleByTag: state.ArticleByTag.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getArticleByAuthor: getArticleByAuthor            
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Articlebyauthor);