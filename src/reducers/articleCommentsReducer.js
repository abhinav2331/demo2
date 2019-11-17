import { GET_COMMENT, DELETE_COMMENT } from '../actions/types';

const getCommentReducers = (state = {}, action) => {

    switch (action.type) {        

        case GET_COMMENT:
            return { ...state, data: action.payload }

        case DELETE_COMMENT:
            return { ...state, data: action.payload }
        

        default:
            return state;
    }
};


export default getCommentReducers;



