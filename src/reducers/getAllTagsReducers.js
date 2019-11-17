import { GET_ALL_TAGS } from '../actions/types';

const getAllTagsReducers = (state = {}, action) => {

    switch (action.type) {
        case GET_ALL_TAGS:
            return { ...state, alltags: action.payload }       

        default:
            return state;
    }
};


export default getAllTagsReducers;



