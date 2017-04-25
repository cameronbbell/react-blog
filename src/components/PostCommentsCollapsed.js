import React from "react";
import PropTypes from "prop-types";

const PostCommentsCollapsed = props => {
  return (
    <div
      id="closed-comments-panel"
      className="panel panel-default"
      onClick={() => props.onPostCommentsMouseClick()}
    >
      <div className="panel-body">
        Comments ({props.numComments})
      </div>
    </div>
  );
};

PostCommentsCollapsed.propTypes = {
  onPostCommentsMouseClick: PropTypes.func.isRequired,
  numComments: PropTypes.number.isRequired
};

export default PostCommentsCollapsed;
