import { GET_USERS_LIST } from "./types"
import axios from "axios";

const getUsersListAsync = (users) => {
    return {
        type: GET_USERS_LIST,
        payload: users
    }
}

const getUsersList = () => {
    return dispatch => {
        axios.get("http://www.json-generator.com/api/json/get/bUaqkXYkHS?indent=2").then(response => {            
            const users = response.data.map(user => {
                return user;
            });
            dispatch(getUsersListAsync(users));
        });
    }
}

export default getUsersList;
