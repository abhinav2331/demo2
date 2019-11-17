import { GET_EMPLOYEE_LIST } from "./types";
import axios from "axios";

const getEmployeeListAsync = (employees) => {
    return {
        type: GET_EMPLOYEE_LIST,
        payload: employees
    }
}


const getEmployeeList = () => {
    return dispatch => {
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
            .then(response => {            
            const employees = response.data.map(employee => {
                return employee;
            });
            dispatch(getEmployeeListAsync(employees));
        })
    }
}

export default getEmployeeList;
