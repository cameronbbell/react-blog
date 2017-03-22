import React, { Component } from 'react';
import PostBanner from '../components/PostBanner';
import PostBody from '../components/PostBody';
import PostComments from '../components/PostComments';

class PostContainer extends Component {
    render() {
      return (
        <div>
          <PostBanner />
          <PostBody />
          <PostComments />
        </div>
      );
    };
};

export default PostContainer;
