import React from 'react';
import PostComments from '../components/PostComments';
import PostCommentsLoading from '../components/PostCommentsLoading';
import PostCommentsCollapsed from '../components/PostCommentsCollapsed';

const PostCommentsContainer = (props) => {
  if (props.areCommentsVisible) {
    return (
      <PostComments />
    );
  } else if (props.areCommentsLoading) {
    return (
      <PostCommentsLoading />
    );
  } else {
    return (
      <PostCommentsCollapsed
        onPostCommentsMouseclick={props.onPostCommentsMouseclick}
        numComments={props.numComments}
        />
    );
  }
};

PostCommentsContainer.propTypes = {
  numComments: React.PropTypes.number.isRequired,
  onPostCommentsMouseClick: React.PropTypes.func,
  areCommentsVisible: React.PropTypes.bool.isRequired,
  areCommentsLoading: React.PropTypes.bool.isRequired,
};

export default PostCommentsContainer;
