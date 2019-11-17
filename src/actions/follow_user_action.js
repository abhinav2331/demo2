import axios from "axios";
import { FOLLOW_USER, UNFOLLOW_USER } from './types';

import { AUTH_URI } from "../app.uri";



export const followUser = (userName) => {   
    const user_uri = userName;
    return (dispatch) => {
        axios({
            method: 'post',
            url: `${AUTH_URI}/profiles/${user_uri}/follow`,
            //data: JSON.stringify({ "body": commentdata.comment }),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({
                type: FOLLOW_USER,
                payload: response.data
            });            

        }).catch(error => {
            console.log(error);
        });
    }

};

export const unFollowUser = (userName) => {    
    const user_uri = userName;
    return (dispatch) => {
        axios({
            method: 'delete',
            url: `${AUTH_URI}/profiles/${user_uri}/follow`,
            //data: JSON.stringify({ "body": commentdata.comment }),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({
                type: UNFOLLOW_USER,
                payload: response.data
            });            

        }).catch(error => {
            console.log(error);
        });
    }

};


