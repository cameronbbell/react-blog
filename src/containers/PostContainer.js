import React, { Component } from 'react';
import PostBanner from '../components/PostBanner';
import PostBody from '../components/PostBody';
import PostComments from '../components/PostComments';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areCommentsVisible: false,
    };

    this.toggleCommentsDisplay = this.toggleCommentsDisplay.bind(this);
  }

  toggleCommentsDisplay() {
    this.setState({ areCommentsVisible: true });
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4'>
            <PostBanner
              headerText='Sample Blog Entry'
              postedOn='March 21, 2017'
              postedBy='Cameron'
            />
            <PostBody
              bodyText='Lorum ipsum something something something'
            />
            <PostComments
              numComments={2}
              onPostCommentsMouseclick={this.toggleCommentsDisplay}
              areCommentsVisible={this.state.areCommentsVisible}
            />
          </div>
        </div>
      </div>
    );
  };
};

export default PostContainer;
