import { GET_USERS_LIST, UPDATE_REASON, ADD_USER, DELETE_USER } from "../actions/types";

const getUserListReducers = (state = [], action) => {
    switch (action.type) {
        case GET_USERS_LIST:
            return action.payload;

        case ADD_USER:
            return [action.payload, ...state];

        case UPDATE_REASON:
            return state.map(user => {
                if (user.name === action.payload.name) {
                    return action.payload;
                }
                return user;
            });
        case DELETE_USER:
            return state.filter(user => user.name !== action.payload.name);
        default:
            return state;
    }
    
}

export default getUserListReducers;
