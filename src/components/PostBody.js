import React from 'react';

const PostBody = (props) => {
  return (
    <div className='well'>
      <p>{props.bodyText}</p>
    </div>
  );
};

PostBody.propTypes = {
  bodyText: React.PropTypes.string.isRequired,
};

export default PostBody;
