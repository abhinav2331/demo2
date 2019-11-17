import { GET_ALL_REWARDS } from "../actions/types";

const getRewardsReducers = (state=[], action) => {
    switch (action.type) {
        case GET_ALL_REWARDS:
            return action.payload;
        default:
            return state;
    }
    
}

export default getRewardsReducers;



