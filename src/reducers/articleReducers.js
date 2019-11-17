import { GET_ARTICLE_BY_TAG, GET_ARTICLE_BY_SLUG, GET_ARTICLE_BY_AUTHOR, ADD_FAVORITE, REMOVE_FAVORITE, EDIT_ARTICLEDATA, DELETE_ARTICLEDATA } from '../actions/types';

const getArticleByTagReducers = (state = {}, action) => {

    switch (action.type) {       

        case GET_ARTICLE_BY_TAG:
            return { ...state, articlebytag: action.payload }

        case GET_ARTICLE_BY_SLUG:
            return { ...state, articlebyslug: action.payload }

        case GET_ARTICLE_BY_AUTHOR:
            return { ...state, data: action.payload }

        case ADD_FAVORITE:
            return { ...state, data: action.payload }

        case REMOVE_FAVORITE:
            return { ...state, data: action.payload }

        case EDIT_ARTICLEDATA:
            return { ...state, data: action.payload }

        case DELETE_ARTICLEDATA:
            return { ...state, data: action.payload }
                

        default:
            return state;
    }
};


export default getArticleByTagReducers;



