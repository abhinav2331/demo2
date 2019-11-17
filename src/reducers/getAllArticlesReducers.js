import { GET_ALL_ARTICLES } from '../actions/types';

const getAllArticlesReducers = (state = {}, action) => {

    switch (action.type) {
        case GET_ALL_ARTICLES:
            return { ...state, allarticle: action.payload }  

         

        default:
            return state;
    }
};


export default getAllArticlesReducers;



