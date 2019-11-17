import { CREATE_COMMENT } from '../actions/types';

const createCommentReducers = (state = {}, action) => {

    switch (action.type) {

        case CREATE_COMMENT:
            return { ...state, data: action.payload }

        default:
            return state;
    }
};


export default createCommentReducers;



