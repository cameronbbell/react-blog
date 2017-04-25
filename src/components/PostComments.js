import React from "react";
import PostCommentsVisible from "./PostCommentsVisible";
import ViewPostCommentsLoading from "../containers/ViewPostCommentsLoading";
import ViewPostCommentsCollapsed from "../containers/ViewPostCommentsCollapsed";
import PropTypes from "prop-types";

const PostComments = props => {
  if (props.visibility === "LOADED") {
    return <PostCommentsVisible />;
  } else if (props.visibility === "LOADING") {
    return <ViewPostCommentsLoading />;
  } else {
    return <ViewPostCommentsCollapsed />;
  }
};

PostComments.propTypes = {
  numComments: PropTypes.number.isRequired,
  visibility: PropTypes.string.isRequired
};

export default PostComments;
