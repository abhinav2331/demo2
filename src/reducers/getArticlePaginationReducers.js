import { GET_ARTICLE_PAGINATION } from '../actions/types';

const getArticlePaginationReducers = (state = {}, action) => {

    switch (action.type) {        

        case GET_ARTICLE_PAGINATION:
            return { ...state, articlepagination: action.payload }    

        default:
            return state;
    }
};


export default getArticlePaginationReducers;



