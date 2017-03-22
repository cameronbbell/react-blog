import React, { Component } from 'react';
import PostBanner from '../components/PostBanner';
import PostBody from '../components/PostBody';
import PostComments from '../components/PostComments';

class PostContainer extends Component {
    render() {
      return (
        <div>
          <div className='row'>
            <div className='col-md-4 col-md-offset-4'>
              <PostBanner />
              <PostBody />
              <PostComments />
            </div>
          </div>
        </div>
      );
    };
};

export default PostContainer;
