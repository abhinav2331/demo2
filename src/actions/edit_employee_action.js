import { EDIT_EMPLOYEE } from "./types.js";
import axios from "axios";

const editEmployeeAsync = (employees) => {    
    return {
        type: EDIT_EMPLOYEE,
        payload: {
            name: employees.name,
            salary: employees.salary,
            age: employees.age,
            id: employees.id
        }
    }
}


const editEmployee = ({ name, salary, age, id }) => {
    return dispatch => {        
        return axios.put("http://dummy.restapiexample.com/api/v1/update/"+id, { name, salary, age, id })
            .then(response => {                               
                dispatch(editEmployeeAsync({ name, salary, age, id }))
            })
            .catch(error => {
                throw (error);
            });
    }
}

export default editEmployee;