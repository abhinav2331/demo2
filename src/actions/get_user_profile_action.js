import axios from "axios";
import { GET_USER_PROFILE } from './types';

import { AUTH_URI } from "../app.uri";



const getUserProfile = (userName) => {    
    const user_uri = userName;
    return (dispatch) => {
        axios({
            method: 'get',
            url: `${AUTH_URI}/profiles/${user_uri}`,
            //data: JSON.stringify({ "body": commentdata.comment }),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({
                type: GET_USER_PROFILE,
                payload: response.data.profile 
            });            

        }).catch(error => {
            console.log(error);
        });
    }

};

export default getUserProfile;
