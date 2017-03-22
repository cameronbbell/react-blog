import React from 'react';

const PostComments = (props) => {
  if (props.areCommentsVisible) {
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          Comments are now visible!
        </div>
      </div>
    );
  } else {
    return (
      <div
      id='closed-comments-panel'
      className='panel panel-default'
      onMouseDown={props.onPostCommentsMouseclick}>
        <div className='panel-body'>
          Comments ({props.numComments})
        </div>
      </div>
    );
  }
};

PostComments.propTypes = {
  numComments: React.PropTypes.number,
};

export default PostComments;
