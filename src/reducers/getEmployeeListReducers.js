import { GET_EMPLOYEE_LIST, ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE, EMP_ADD_RESPONSE } from "../actions/types";

const getEmployeeListReducers = (state=[], action) => {
    switch (action.type) {
        case GET_EMPLOYEE_LIST:
            return action.payload;

        case ADD_EMPLOYEE:
            return [action.payload, ...state];

        case EDIT_EMPLOYEE:
            return state.map(employees => {
                if (employees.name === action.payload.name) {
                    return action.payload;
                }
                return employees;
            });

        case DELETE_EMPLOYEE:
            return state.filter(employees => employees.id !== action.payload.id);

        case EMP_ADD_RESPONSE:
            return action.payload;

        default:
            return state;
    }
    
}

export default getEmployeeListReducers;
