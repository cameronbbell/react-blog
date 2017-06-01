import React from "react";
import PropTypes from "prop-types";
import Comments from "./Comments";

const Post = props => {
  return (
    <div className="col-md-4 col-md-offset-4">
      <div>
        <h2>{props.title}</h2>
        <p className="small">
          Posted by {props.postedBy} on {props.postedDate}
        </p>
      </div>
      <div className="well">
        <p>{props.text}</p>
      </div>
      <Comments
        id={props.id}
        commentsVisibility={props.commentsVisibility}
        comments={props.comments}
        onCommentsClick={props.onCommentsClick}
      />
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  postedBy: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  commentsVisibility: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      postedDate: PropTypes.date,
      postedBy: PropTypes.string
    }).isRequired
  ),
  onCommentsClick: PropTypes.func.isRequired
};

export default Post;
