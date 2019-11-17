import { ADD_USER } from './types';

const addUser = (users) => {
    //const message = `You've just added ${person.name} to the Most Wanted List.`;
    return dispatch => {
        dispatch(addUserAsync(users));        
    }
}

function addUserAsync(users) {
    return {
        type: ADD_USER,
        payload: users
    };
}

export default addUser;

