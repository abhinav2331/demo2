import axios from "axios";
import { GET_ALL_TAGS, GET_ARTICLE_BY_TAG, GET_ARTICLE_BY_SLUG, GET_ARTICLE_BY_AUTHOR, ADD_FAVORITE, REMOVE_FAVORITE, EDIT_ARTICLEDATA, DELETE_ARTICLEDATA, CREATE_COMMENT, GET_COMMENT, DELETE_COMMENT, API_RESPONSE_SUCCESS, API_RESPONSE_SUCCESS_MAKE_COMMENT } from './types';

import { AUTH_URI } from "../app.uri";
import History from '../history.js';


export const getAllTags = () => {    
    return (dispatch) => {
        axios.get(`${AUTH_URI}/tags`)
            .then(response => {                
                dispatch({
                    type: GET_ALL_TAGS,
                    payload: response.data
                });
            }).catch(error => {
                console.log(error);
            });
    };
};

export const getArticleByTag = (tagList) => {    
    const uri_tag = tagList;
    return (dispatch) => {
        axios.get(`${AUTH_URI}/articles?tag=${uri_tag}`)
            .then(response => {                
                dispatch({
                    type: GET_ARTICLE_BY_TAG,
                    payload: response.data.articles
                });
                console.log("fuck");
                console.log(response.data.articles);
            }).catch(error => {
                console.log(error);
            });
    };
};

export const getArticleBySlug = (clickedslug) => {    
    const slug_uri = clickedslug;
    return (dispatch) => {
        axios.get(`${AUTH_URI}/articles/${slug_uri}`)
            .then(response => {                
                dispatch({
                    type: GET_ARTICLE_BY_SLUG,
                    payload: response.data.article
                });
            }).catch(error => {
                console.log(error);
            });
    };
};

export const getArticleByAuthor = (username) => {    
    return (dispatch) => {        
        const author_uri = username;
        axios.get(`${AUTH_URI}/articles?author=${author_uri}`)
            .then(response => {                
                dispatch({
                    type: GET_ARTICLE_BY_AUTHOR,
                    payload: response.data.articles
                });
            }).catch(error => {
                console.log(error);
            });
    };
};

export const add_favorite = (slug) => {
    return (dispatch) => {        
        const slug_uri = slug;        
        axios({
            method: 'post',
            url: `${AUTH_URI}/articles/${slug_uri}/favorite`,            
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({ type: ADD_FAVORITE });           
        }).catch(error => {
            console.log("Post Error : " + error);
        });
    };
};
export const remove_favorite = (slug) => {
    return (dispatch) => {        
        const slug_uri = slug;        
        axios({
            method: 'delete',
            url: `${AUTH_URI}/articles/${slug_uri}/favorite`,            
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({ type: REMOVE_FAVORITE });            
        }).catch(error => {
            console.log("Post Error : " + error);
        });
    };
};

export const editArticleData = (editData) => {
    debugger;
    const article_slug = editData.slug
    return (dispatch) => {
        axios({
            method: 'put',
            url: `${AUTH_URI}/articles/${article_slug}`,
            data: JSON.stringify(editData),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({ type: EDIT_ARTICLEDATA });
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

export const deleteArticleData = (deleteData) => {   
    const article_slug = deleteData.slug
    return (dispatch) => {
        axios({
            method: 'delete',
            url: `${AUTH_URI}/articles/${article_slug}`,            
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({ type: DELETE_ARTICLEDATA });            
            History.push('/employeeprofile');

        }).catch(error => {
            console.log("Post Error : " + error);
        });
    }

};

export const createComments = (commentdata) => {    
    const article_slug = commentdata.slug
    return (dispatch) => {
        axios({
            method: 'post',
            url: `${AUTH_URI}/articles/${article_slug}/comments`,
            data: JSON.stringify({ "body": commentdata.comment}),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {             
            dispatch({
                type: CREATE_COMMENT,
                payload: response.data.comment
            });   
            dispatch({
                type: API_RESPONSE_SUCCESS_MAKE_COMMENT,
                payload: response.status
            });

        }).catch(error => {
            console.log("Post Error : " + error);
        });
    }
};

export const getComments = (commentslug) => {    
    const article_slug = commentslug.slug
    return (dispatch) => {
        axios({
            method: 'get',
            url: `${AUTH_URI}/articles/${article_slug}/comments`            
        }).then(response => {
            dispatch({                
                type: GET_COMMENT,
                payload: response.data.comments
            });            

        }).catch(error => {
            console.log(error);
        });
    }

};

export const deleteComments = (commentslug) => {    
    const article_slug = commentslug.slug
    const commentId = commentslug.commentId
    return (dispatch) => {
        axios({
            method: 'delete',
            url: `${AUTH_URI}/articles/${article_slug}/comments/${commentId}`,            
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'authorization': "Token " + localStorage.getItem("token")
            }
        }).then(response => {
            dispatch({
                type: DELETE_COMMENT,
                payload: response.data.comments
            });            

        }).catch(error => {
            console.log(error);
        });
    }

};





