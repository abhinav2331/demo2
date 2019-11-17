import axios from "axios";
import { GET_ARTICLE_PAGINATION } from './types';

import { AUTH_URI } from "../app.uri";


const getArticlePagination = () => {    
    return (dispatch) => {
        axios.get(`${AUTH_URI}/articles`)
            .then(response => {                
                dispatch({
                    type: GET_ARTICLE_PAGINATION,
                    payload: response.data.articlesCount
                });
            }).catch(error => {
                console.log(error);

            });
    };
};

export default getArticlePagination;