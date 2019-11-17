import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_CURRENT_EMPLOYEE, EDIT_CURRENT_EMPLOYEE, ADD_NEW_POST } from '../actions/types';

const getLoginEmployeeReducers = (state = {}, action) => {

    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true }
        case UNAUTH_USER:
            return { ...state, authenticated: false }
        case AUTH_ERROR:
            return { ...state, error: action.payload }

        case FETCH_CURRENT_EMPLOYEE:
            return { ...state, crtemployee: action.payload }
            
        case EDIT_CURRENT_EMPLOYEE:
            return { ...state, editEmployee: action.payload }
            
        case ADD_NEW_POST:
            return { ...state, addnewpost: action.payload }
            
        default:
            return state;
    }
};


export default getLoginEmployeeReducers;



