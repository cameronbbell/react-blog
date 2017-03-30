import React from 'react';
import gears from '../../public/gears.svg';

const PostCommentsLoading = (props) => {
  return (
    <div className='panel panel-default'>
      <div className='panel-body'>
        <img
          src={gears}
          alt='gears'
          className='img-responsive center-block'>
        </img>
      </div>
    </div>
  );
};

export default PostCommentsLoading;
