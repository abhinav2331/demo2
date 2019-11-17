import axios from "axios";
import { GET_ALL_ARTICLES } from './types';

import { AUTH_URI } from "../app.uri";


const getAllArticles = () => {
    
    return (dispatch) => {        
        let auth = "";
        if (localStorage.getItem("token") != null) {
            auth = "Token " + localStorage.getItem("token");
        }
        else {}        
        axios({
            method: 'get',
            url: `${AUTH_URI}/articles`,
            //data: JSON.stringify(currentemployees),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': auth
            }
        }).then(response => {
            dispatch({
                type: GET_ALL_ARTICLES,
                payload: response.data.articles 
            });            
        }).catch(error => {
            console.log("Post Error : " + error);
        });
    };
};

export default getAllArticles;