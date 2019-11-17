import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import { Link } from "react-router-dom";

import getAllArticles from "../actions/get_all_articles_action";
import { getAllTags, getArticleByTag } from "../actions/articles_action";
import getArticlePagination from "../actions/get_article_pagination";
import { add_favorite, remove_favorite } from "../actions/articles_action";
//import Fabicon from "./fabIcon";
import Pagination from "./pagination";

const FAVORITED_CLASS = 'btn btn-sm fab_class';
const NOT_FAVORITED_CLASS = 'btn btn-sm not_fab_class';

class Allarticles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            Article: [],
            Tag: [],
            SelectedTag:"",
            Tagarticle: [],
            articlesCount:""
        }
        this.onClickArticleByTag = this.onClickArticleByTag.bind(this);
        this.onClickClearSelectTag = this.onClickClearSelectTag.bind(this);
        this.favoriteHandleClick = this.favoriteHandleClick.bind(this);             
    }
    componentDidMount() {
        this.props.getAllArticles();
        this.props.getAllTags();
        this.props.getArticlePagination();
    }    

    componentWillReceiveProps(nextProps) {
        this.setState({
            Article: nextProps.AllArticles,
            Tag: nextProps.ArticleSection.tags,
            Tagarticle: nextProps.ArticleByTag, 
            articlesCount: nextProps.Articlepagination
        })
    }

    onClickArticleByTag(index, tagList) {
        debugger;        
        this.props.getArticleByTag(tagList);
        this.setState({
            SelectedTag: tagList
        })
    }
    onClickClearSelectTag() {
        this.setState({
            SelectedTag: ""
        })
    }
    favoriteHandleClick(articleitem) {
        debugger;
        if (articleitem.favorited) {
            this.props.remove_favorite(articleitem.slug);
        } else {
            this.props.add_favorite(articleitem.slug);
        }
        setTimeout(() => { this.props.getAllArticles() }, 500);

    };
    
    render() {
        return (
            <section className="content">

                <div style={{ marginBottom: "10px" }}>
                    <button onClick={this.onClickClearSelectTag} className="btn btn-primary">All Articles</button>
                    {
                        this.state.SelectedTag !== "" ? <button style={{marginLeft:"10px"}} className="btn btn-primary"># {this.state.SelectedTag}</button> : ""
                    }
                    
                </div>
                <div className="row">
                    <div className="col-md-9">                        

                        {
                            this.state.SelectedTag === "" ?
                                <div>
                                    {this.state.Article.map((articleitem, index) => {
                                        const thedate = moment(articleitem.createdAt).format("DD-MM-YYYY");

                                        //const articleData = this.props.articleData;
                                        const favoriteButtonClass = articleitem.favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS;
                                    return (
                                        <div className="article-preview" key={index}>
                                            <div className="article-meta">
                                                {/*<Fabicon 
                                                    articleData={articleitem}                                                    
                                                />     */}
                                                <div className={favoriteButtonClass} onClick={() => this.favoriteHandleClick(articleitem)}>
                                                    <i className="fa fa-heart"></i>{articleitem.favoritesCount}
                                                </div>    


                                                <Link to={`/@${articleitem.author.username}`}>
                                                    {
                                                        articleitem.author.image === "" ? <img src="http://chittagongit.com/images/dummy-icon/dummy-icon-7.jpg" alt="" />
                                                            : <img src={articleitem.author.image} alt="user" />
                                                    }
                                                </Link>
                                                <div className="info"> <Link to={`/@${articleitem.author.username}`}>{articleitem.author.username}</Link><span className="date">{thedate}</span></div>
                                            </div>
                                            <Link className="preview-link" to={`/article/${articleitem.slug}`}>
                                                <h1>{articleitem.title}</h1>
                                                <p>{articleitem.body}</p>
                                                <span className="readmore">Read more...</span>
                                                <ul className="tag-list">
                                                    {articleitem.tagList.map((tagitem, index) => {
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
                                    })}
                                </div>

                                : <div>{
                                    this.state.Tagarticle.map((tagarticleitem, index) => {
                                        const thedate = moment(tagarticleitem.createdAt).format("DD-MM-YYYY");
                                        return (
                                            <div className="article-preview" key={index}>
                                                <div className="article-meta">
                                                    <Link to={`/@${tagarticleitem.author.username}`}>
                                                        {
                                                            tagarticleitem.author.image === "" ? <img src="http://chittagongit.com/images/dummy-icon/dummy-icon-7.jpg" alt="" />
                                                                : <img src={tagarticleitem.author.image} alt="user" />
                                                        }
                                                    </Link>
                                                    <div className="info"><Link to={`/@${tagarticleitem.author.username}`}>{tagarticleitem.author.username}</Link><span className="date">{thedate}</span></div>
                                                </div>
                                                <Link className="preview-link" to={`/article/${tagarticleitem.slug}`}>
                                                    <h1>{tagarticleitem.title}</h1>
                                                    <p>{tagarticleitem.body}</p>
                                                    <span className="readmore">Read more...</span>
                                                    <ul className="tag-list">
                                                        {tagarticleitem.tagList.map((tagitemnew, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    {tagitemnew}
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }</div>
                        }

                        {/*End This is for the Article By Tags*/}

                        <Pagination
                            articlesCount={this.state.articlesCount}
                        />
                    </div>
                    <div className="col-md-3">
                        {
                            this.state.Tag.map((tagList, index) => {
                                return (
                                    <span className="tags" key={index}>
                                        <a onClick={() => this.onClickArticleByTag(index, tagList)}>{tagList}</a>
                                    </span>
                                    )
                            })
                        }
                    </div>
                </div>
                
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        AllArticles: state.AllArticles.allarticle,
        ArticleSection: state.ArticleSection.alltags,
        ArticleByTag: state.ArticleByTag.articlebytag, 
        Articlepagination: state.Articlepagination.articlepagination,
        //ArticleByTag: state.ArticleByTag.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getAllArticles: getAllArticles,
            getAllTags: getAllTags,
            getArticleByTag: getArticleByTag, 
            getArticlePagination: getArticlePagination,
            add_favorite: add_favorite,
            remove_favorite: remove_favorite
        },
        dispatch
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Allarticles);
