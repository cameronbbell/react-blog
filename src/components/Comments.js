import React from "react";
import PropTypes from "prop-types";

const Comments = props => {
  let comments;
  if (props.commentsVisibility === "COLLAPSED") {
    comments = (
      <div
        id="closed-comments-panel"
        className="panel panel-default"
        onClick={() => {
          props.onCommentsClick(props.id);
        }}
      >
        <div className="panel-body">
          Comments ({props.comments.length})
        </div>
      </div>
    );
  } else if (props.commentsVisibility === "VISIBLE") {
    comments = (
      <div className="panel panel-default">
        <div className="panel-body">
          <p>Comments are loaded!</p>
        </div>
      </div>
    );
  }
  return comments;
};

Comments.propTypes = {
  id: PropTypes.number.isRequired,
  commentsVisibility: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      postedBy: PropTypes.string.isRequired,
      postedDate: PropTypes.string.isRequired
    })
  ).isRequired,
  onCommentsClick: PropTypes.func.isRequired
};

export default Comments;
