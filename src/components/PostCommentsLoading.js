import React from "react";
import gears from "../../public/gears.svg";
import PropTypes from "prop-types";

class PostCommentsLoading extends React.Component {
  componentDidMount() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(
        () => {
          if (true) {
            resolve("Success");
          } else {
            reject(Error("Something bad happened"));
          }
        },
        3000
      );
    });

    promise.then(() => this.props.commentsFinishedLoading());
  }

  render() {

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <img
            src={gears}
            alt="gears"
            className="img-responsive center-block"
          />
        </div>
      </div>
    );
  }
}

PostCommentsLoading.propTypes = {
  commentsFinishedLoading: PropTypes.func.isRequired
};

export default PostCommentsLoading;
