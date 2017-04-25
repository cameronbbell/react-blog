import { connect } from "react-redux";
import PostCommentsLoading from "../components/PostCommentsLoading";
import { commentsFinishedLoading } from "../actions";

const mapDispatchToProps = dispatch => ({
  commentsFinishedLoading: () => {
    dispatch(commentsFinishedLoading());
  }
});

const ViewPostCommentsLoading = connect(undefined, mapDispatchToProps)(
  PostCommentsLoading
);

export default ViewPostCommentsLoading;
