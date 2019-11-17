import axios from "axios";
import { GET_FAVORITED_ARTICLE } from './types';

import { AUTH_URI } from "../app.uri";


const getFavoritedArticle = (username) => {
    debugger;
    const user_uri = username;
    return (dispatch) => {        
        axios.get(`${AUTH_URI}/articles?favorited=${user_uri}`)
            .then(response => {                
                dispatch({
                    type: GET_FAVORITED_ARTICLE,
                    payload: response.data.articles                    
                });
            }).catch(error => {
                console.log(error);

            });
    };
};

export default getFavoritedArticle;
