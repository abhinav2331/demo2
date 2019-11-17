import { GET_USER_PROFILE } from '../actions/types';

const getUserProfile = (state = {}, action) => {

    switch (action.type) {
        case GET_USER_PROFILE:
            return { ...state, userprofile: action.payload }

        
        default:
            return state;
    }
};


export default getUserProfile;



