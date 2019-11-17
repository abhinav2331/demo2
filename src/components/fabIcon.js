import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { add_favorite, remove_favorite } from "../actions/articles_action";

const FAVORITED_CLASS = 'btn btn-sm fab_class';
const NOT_FAVORITED_CLASS = 'btn btn-sm not_fab_class';

class Fabicon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,            
            Tagarticle:[]
        }        
        this.favoriteHandleClick = this.favoriteHandleClick.bind(this);
    }    
    
    favoriteHandleClick(articleData) {         
        debugger;        
        if (articleData.favorited) {
            this.props.remove_favorite(articleData.slug);
        } else {
            this.props.add_favorite(articleData.slug);
        }        
        
    };

    render() {
        const articleData = this.props.articleData;
        const favoriteButtonClass = this.props.articleData.favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS;
        return (
            <div className={favoriteButtonClass} onClick={() => this.favoriteHandleClick(articleData)}>
            <i className="fa fa-heart"></i>{articleData.favoritesCount}</div>                                             
        )
    }
}

export const mapStateToProps = (state) => {
    return {        
        ArticleByTag: state.ArticleByTag.data        
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {            
            add_favorite: add_favorite,
            remove_favorite: remove_favorite            
        },
        dispatch
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Fabicon);
