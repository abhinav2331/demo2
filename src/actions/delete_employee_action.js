import { DELETE_EMPLOYEE } from "./types";
import axios from "axios";

const deleteEmployeeAsync = (employees) => {    
    return {        
        type: DELETE_EMPLOYEE,
        payload: {            
            name: employees.name,
            salary: employees.salary,
            age: employees.age,
            id: employees.id
        }
    }
}

const deleteEmployee = ({ name, salary, age, id }) => {
    return dispatch => {        
        return axios.delete("http://dummy.restapiexample.com/api/v1/delete/"+id, { name, salary, age, id })
            .then(response => {
                dispatch(deleteEmployeeAsync({ name, salary, age, id }))
            })
            .catch(error => {
                throw (error);
            });        
    }
}


export default deleteEmployee;