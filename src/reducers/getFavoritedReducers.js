import { GET_FAVORITED_ARTICLE } from '../actions/types';

const getFavoritedArticle = (state = {}, action) => {

    switch (action.type) {
        case GET_FAVORITED_ARTICLE:
            return { ...state, favoritedarticle: action.payload }

        
        default:
            return state;
    }
};


export default getFavoritedArticle;



