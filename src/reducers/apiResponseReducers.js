import { API_RESPONSE_SUCCESS, API_RESPONSE_SUCCESS_MAKE_COMMENT } from '../actions/types';

const apiResponseReducers = (state = {}, action) => {

    switch (action.type) {       

        case API_RESPONSE_SUCCESS:
            return { ...state, data: action.payload } 

        case API_RESPONSE_SUCCESS_MAKE_COMMENT:
            return { ...state, data2: action.payload } 
                

        default:
            return state;
    }
};


export default apiResponseReducers;



