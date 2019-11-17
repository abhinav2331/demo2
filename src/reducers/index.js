import { combineReducers } from "redux";
import getUserListReducers from "./getUsersListReducers.js";
import getRewardsReducers from "./getRewardsReducers.js";
import getEmployeeListReducers from "./getEmployeeListReducers.js";
import getLoginEmployeeReducers from "./getLoginEmployeeReducers";
import getAllArticlesReducers from "./getAllArticlesReducers";
import getAllTagsReducers from "./getAllTagsReducers";
import getArticleByTagReducers from "./articleReducers";
import getCommentReducers from "./articleCommentsReducer";
import getArticlePaginationReducers from "./getArticlePaginationReducers";
import getUserProfile from "./getUserProfile";
import getFavoritedArticle from "./getFavoritedReducers";
import createCommentReducers from "./articleCreateCommentsReducer";
import followUserReducers from "./followUserReducer";
import apiResponseReducers from "./apiResponseReducers";

const rootReducer = combineReducers({
    UserList: getUserListReducers,
    RewardList: getRewardsReducers,
    EmployeeList: getEmployeeListReducers,
    EmployeeAuth: getLoginEmployeeReducers,
    AllArticles: getAllArticlesReducers,
    ArticleSection: getAllTagsReducers,
    ArticleByTag: getArticleByTagReducers,
    ArticleComment: getCommentReducers,
    Articlepagination: getArticlePaginationReducers,
    Userprofile: getUserProfile,
    Favoritedarticle: getFavoritedArticle,
    Createcomment: createCommentReducers,
    Followstae: followUserReducers,
    APIresponse: apiResponseReducers    
});

export default rootReducer;
