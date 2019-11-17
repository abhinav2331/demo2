import { FOLLOW_USER, UNFOLLOW_USER } from '../actions/types';

const followUserReducers = (state = {}, action) => {

    switch (action.type) {

        case FOLLOW_USER:
            return { ...state, data: action.payload }           

        case UNFOLLOW_USER:
            return { ...state, data: action.payload } 

        default:
            return state;
    }
};


export default followUserReducers;



