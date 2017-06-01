import { connect } from "react-redux";
import { expandComments } from "../actions";
import Post from "../components/Post";

const mapStateToProps = state => {
  const blogPost = state.blogPost[0];

  return {
    id: blogPost.id,
    title: blogPost.title,
    postedBy: blogPost.postedBy,
    postedDate: blogPost.postedDate,
    text: blogPost.text,
    commentsVisibility: blogPost.commentsVisibility,
    comments: blogPost.comments
  };
};

const mapDispatchToProps = dispatch => ({
  onCommentsClick: (id) => {
    dispatch(expandComments(id));
  }
});

const ViewPost = connect(mapStateToProps, mapDispatchToProps)(Post);

export default ViewPost;
