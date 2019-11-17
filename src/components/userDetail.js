import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import moment from "moment";
import { Link } from "react-router-dom";



//import Articlebyauthor from "./articleByAuthor";
import getUserProfile from "../actions/get_user_profile_action";
import getFavoritedArticle from "../actions/get_favorited_action";
import { getArticleByAuthor } from "../actions/articles_action";
import Fabicon from "./fabIcon";
import { followUser, unFollowUser } from "../actions/follow_user_action";

class Userdetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            username: "",
            userinfo: [],
            Article: [],
            Favoritelabel: false,
            Favarticle: []
        }
        this.getFavorited = this.getFavorited.bind(this);
        this.clearFavorite = this.clearFavorite.bind(this);
        this.handleFollowUser = this.handleFollowUser.bind(this);
        this.handleUnFollowUser = this.handleUnFollowUser.bind(this);
    }

    componentWillMount() {
        //debugger;
        this.setState({
            username: this.props.location.pathname.slice(2)
        })
    }
    componentDidMount() {
        //debugger;
        const username = this.state.username;
        this.props.getUserProfile(username);
        this.props.getArticleByAuthor(username);
    }
    componentWillReceiveProps(props) {
        this.setState({
            userinfo: props.Userprofile,
            Article: props.ArticleByTag,
            Favarticle: props.Favoritedarticle
        })
    }

    getFavorited(e) {
        debugger;
        e.preventDefault();

        this.setState({
            Favoritelabel: true
        })

        const username = this.state.username;
        this.props.getFavoritedArticle(username);
    }
    clearFavorite(e) {
        e.preventDefault();
        this.setState({
            Favoritelabel: false
        })
    }
    handleFollowUser(userName) {        
        this.props.followUser(userName);
        setTimeout(() => {           
            this.props.getUserProfile(userName);
            this.setState({
                userinfo: this.props.Userprofile                
            });            
        }, 1000);
    }
    handleUnFollowUser(userName) {
        this.props.unFollowUser(userName);
        setTimeout(() => {           
            this.props.getUserProfile(userName);
            this.setState({
                userinfo: this.props.Userprofile                
            });            
        }, 1000);
    }

    render() {
        const userinfo = this.state.userinfo;
        const userName = this.state.username;

        const user = localStorage.getItem("crntuser");
        const user2 = user.slice(1, -1);

        return (
            <section>
                <div className="profile_section clearfix">
                    <div className="content">
                        <div className="profile_image">
                            {
                                userinfo.image == null ?
                                    <img src="http://chittagongit.com/images/dummy-icon/dummy-icon-7.jpg" alt="" />
                                    : <img src={userinfo.image} alt="" />
                            }
                        </div>
                        <div className="username">
                            {userinfo.username}
                        </div>
                        <p>{userinfo.bio}</p>

                        {/*
                            this.state.userinfo.following === true ?
                                <button onClick={() => this.handleUnFollowUser(userName)} className="btn btn-primary pull-right">Un Follow {userinfo.username}</button>
                                : <button onClick={() => this.handleFollowUser(userName)} className="btn btn-primary pull-right">Follow {userinfo.username}</button>
                        */}
                        {
                            user2 === userName ? "" : <div>
                                {
                                    this.state.userinfo.following === true ?
                                        <button onClick={() => this.handleUnFollowUser(userName)} className="btn btn-primary pull-right">Un Follow {userinfo.username}</button>
                                        : <button onClick={() => this.handleFollowUser(userName)} className="btn btn-primary pull-right">Follow {userinfo.username}</button>
                                }
                                </div>
                        }

                        
                    </div>
                </div>

                <div className="content">

                    <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                        <button onClick={this.clearFavorite} className="btn btn-primary">All Articles</button>
                        <button style={{ marginLeft: "15px" }} onClick={this.getFavorited} className="btn btn-primary">Favorited Articles</button>
                    </div>

                    <div>
                        {
                            this.state.Favoritelabel === false ?
                                <div>
                                    {this.state.Article.map((articleitem, index) => {
                                        const thedate = moment(articleitem.createdAt).format("DD-MM-YYYY");
                                        return (
                                            <div className="article-preview" key={index}>
                                                <div className="article-meta">
                                                    <Fabicon
                                                        articleData={articleitem}
                                                    />
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
                                : <div>
                                    {
                                        this.state.Favarticle === "" ? "No article available yet." : <div>
                                                Fabotited data:
                                            
                                            {this.state.Favarticle.map((fabitem, index) => {
                                                const thedate = moment(fabitem.createdAt).format("DD-MM-YYYY");
                                                return (
                                                    <div className="article-preview" key={index}>                                                        
                                                        <div className="article-meta">                                                            
                                                            <Link to={`/@${fabitem.author.username}`}>
                                                                {
                                                                    fabitem.author.image === "" ? <img src="http://chittagongit.com/images/dummy-icon/dummy-icon-7.jpg" alt="" />
                                                                        : <img src={fabitem.author.image} alt="user" />
                                                                }
                                                            </Link>
                                                            <div className="info"> <Link to={`/@${fabitem.author.username}`}>{fabitem.author.username}</Link><span className="date">{thedate}</span></div>
                                                        </div>
                                                        <Link className="preview-link" to={`/article/${fabitem.slug}`}>
                                                            <h1>{fabitem.title}</h1>
                                                            <p>{fabitem.body}</p>
                                                            <span className="readmore">Read more...</span>
                                                            <ul className="tag-list">
                                                                {fabitem.tagList.map((tagitem, index) => {
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
                                    }

                                    


                                </div>
                        }
                    </div>





                </div>

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Userprofile: state.Userprofile.userprofile,
        ArticleByTag: state.ArticleByTag.data,
        Favoritedarticle: state.Favoritedarticle.favoritedarticle,
        Followstae: state.Followstae
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getUserProfile: getUserProfile,
            getArticleByAuthor: getArticleByAuthor,
            getFavoritedArticle: getFavoritedArticle,
            followUser: followUser,
            unFollowUser: unFollowUser
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Userdetail);
