import { ADD_EMPLOYEE, EMP_ADD_RESPONSE } from "./types";
import axios from "axios";

const addEmployeeAsync = (employees) => {    
    return {
        type: ADD_EMPLOYEE,        
        payload: {            
            name: employees.name,
            salary: employees.salary,
            age: employees.age  
        }
    }
}
const addEmployeeResAsync = (response) => {    
    return {
        type: EMP_ADD_RESPONSE,
        payload: response.data
    }
}


const addEmployee = ({ name, salary, age }) => {
    return dispatch => {           
        return axios.post("http://dummy.restapiexample.com/api/v1/create", { name, salary, age })
            .then((response) => {                
                dispatch(addEmployeeAsync({ name, salary, age }));
                dispatch(addEmployeeResAsync(response));
            })
            .catch((error) => {
                throw (error);
            });        
    }
}

export default addEmployee;
