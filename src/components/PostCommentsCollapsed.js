import React from 'react';

const PostCommentsCollapsed = (props) => {
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
};

PostCommentsCollapsed.propTypes = {
  onPostCommentsMouseClick: React.PropTypes.func,
};

export default PostCommentsCollapsed;
