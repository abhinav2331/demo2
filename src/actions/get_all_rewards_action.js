import { GET_ALL_REWARDS } from "./types";
import axios from "axios";


const getAllRewardsAsync = (rewards) => {
    return {
        type: GET_ALL_REWARDS,
        payload: rewards
    }
}

const getAllRewards = () => {
    return dispatch => {        
        axios.get("http://www.json-generator.com/api/json/get/cesHFohVea?indent=2")
            .then(response => {  
            const rewards = response.data.map(reward => {
                return reward;
            });
            dispatch(getAllRewardsAsync(rewards));
            }).catch(error => {
                console.log(error);
                
            });

    }
}

export default getAllRewards;
