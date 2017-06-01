import { combineReducers } from "redux";
import blogPost from "./blogPost";

const blogApp = combineReducers({
  blogPost
});

export default blogApp;
