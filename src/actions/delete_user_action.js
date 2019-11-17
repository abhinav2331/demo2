import { DELETE_USER } from "./types";


const deleteUserAsync = (user) => {
    return {
        type: DELETE_USER,
        payload:user
    }
}

const deleteUser = (user) => {
    return dispatch => {
        dispatch(deleteUserAsync(user));
    }
}


export default deleteUser;
