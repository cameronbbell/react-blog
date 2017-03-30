import React from 'react';

const PostBanner = (props) => {
  return (
    <div className=''>
      <h2>{props.headerText}</h2>
      <p className='small'>Posted by {props.postedBy} on {props.postedOn}</p>
    </div>
  );
};

PostBanner.propTypes = {
  headerText: React.PropTypes.string.isRequired,
  postedOn: React.PropTypes.string.isRequired,
  postedBy: React.PropTypes.string.isRequired,
};

export default PostBanner;
