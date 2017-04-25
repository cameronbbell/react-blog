import React, { Component } from "react";
import PostBanner from "../components/PostBanner";
import PostBody from "../components/PostBody";
import ViewPostComments from "./ViewPostComments";

class PostContainer extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <PostBanner
              headerText="Sample Blog Entry"
              postedOn="March 21, 2017"
              postedBy="Cameron"
            />
            <PostBody bodyText="Lorum ipsum something something something" />
            <ViewPostComments />
          </div>
        </div>
      </div>
    );
  }
}

export default PostContainer;
