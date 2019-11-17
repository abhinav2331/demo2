import axios from "axios";
import History from '../history.js';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_CURRENT_EMPLOYEE, EDIT_CURRENT_EMPLOYEE, ADD_NEW_POST, API_RESPONSE_SUCCESS } from './types';
import { AUTH_URI } from "../app.uri";



export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    };  
};


export const loginEmployee = ({ email, password }) => {
    return (dispatch) => {        
        axios.post(`${AUTH_URI}/users/login`, { "user": { email, password } })        
            .then(response => {                
                // if request is good...
                // - update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });
                //console.log(response.data);
                // - save the jwt token                
                localStorage.setItem('token', response.data.user.token);
                localStorage.setItem('authenticated',  true);
                localStorage.setItem('crntuser', JSON.stringify(response.data.user.username));
                // - redirect to the route '/feature'
                History.push('/dashboard');

            }).catch(() => {
                // if request is bad...
                // - show an error to the user
                dispatch(authError('Bad Login Info'));
            });
    };
};


export const signoutEmployee = () => {    
    localStorage.removeItem('token');   
    localStorage.clear();
    History.push('/login');
    return { type: UNAUTH_USER };    
};

export const signupEmployee = ({ username, email, password }) => {
    return (dispatch) => {        
        axios.post(`${AUTH_URI}/users`, { user: { username, email, password } })
            .then(response => {
                dispatch({ type: AUTH_USER });
                //console.log(response);
                localStorage.setItem('token', response.data.user.token);                
                History.push('/login');
            })
            .catch(err => {                
                dispatch(authError(err.response));
            });
    };
};

export const fetchCurrentEmployee = () => {    
    return (dispatch) => {        
        axios.get(`${AUTH_URI}/user`, { headers: { authorization: "Token "+localStorage.getItem('token') }            
        }).then(response => {            
            dispatch({
                type: FETCH_CURRENT_EMPLOYEE,
                payload: response.data.user               
            });            
        });
    };
};
 
export const editCurrentEmployee = (currentemployees) => {   
    return (dispatch) => {
        axios({
            method: 'put',
            url: `${AUTH_URI}/user`,
            data: JSON.stringify(currentemployees),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({ type: EDIT_CURRENT_EMPLOYEE });
            dispatch({
                type: API_RESPONSE_SUCCESS,
                payload: response.status
            });
            console.log(response);
            }).catch(error => {
                console.log("Post Error : " + error);
        });
    }    
};


export const addNewPost = (addPost) => {
    return (dispatch) => { 
        axios({
            method: 'post',
            url: `${AUTH_URI}/articles`,
            data: JSON.stringify(addPost),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({ type: ADD_NEW_POST });            
            History.push('/');
        }).catch(error => {
            console.log("Post Error : " + error);
        });

    };
};





