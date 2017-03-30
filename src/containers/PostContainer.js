import React, { Component } from 'react';
import PostBanner from '../components/PostBanner';
import PostBody from '../components/PostBody';
import PostCommentsContainer from './PostCommentsContainer';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areCommentsVisible: false,
      areCommentsLoading: false,
    };

    this.handleDisplayComments = this.handleDisplayComments.bind(this);
    this.setCommentsLoading = this.setCommentsLoading.bind(this);
    this.setCommentsVisible = this.setCommentsVisible.bind(this);
  }

  handleDisplayComments() {
    console.log('handleDisplayComments clicked');

    this.setCommentsLoading();

    const promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        if(1 === 1) {
          resolve('Success!');
        } else {
          reject(Error('Something bad happened!'));
        }
      }, 3000);
    });

    promise.then(() => this.setCommentsVisible());
  }

  loadComments() {
    return new Promise((resolve, reject) => {
      this.setCommentsLoading();
      resolve('success');
    });
  }

  setCommentsLoading() {
    this.setState({ areCommentsLoading: true });
  }

  setCommentsVisible() {
    this.setState({
      areCommentsLoading: false,
      areCommentsVisible: true,
    });
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
            <PostCommentsContainer
              numComments={2}
              onPostCommentsMouseclick={this.handleDisplayComments}
              areCommentsVisible={this.state.areCommentsVisible}
              areCommentsLoading={this.state.areCommentsLoading}
            />
          </div>
        </div>
      </div>
    );
  };
};

export default PostContainer;
