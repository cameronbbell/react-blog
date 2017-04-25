import { connect } from "react-redux";
import { expandComments } from "../actions";
import PostCommentsCollapsed from "../components/PostCommentsCollapsed";

const mapStateToProps = state => ({
  numComments: state.comments.comments.length
});

const mapDispatchToProps = dispatch => ({
  onPostCommentsMouseClick: () => {
    dispatch(expandComments());
  }
});

const ViewPostCommentsCollapsed = connect(mapStateToProps, mapDispatchToProps)(
  PostCommentsCollapsed
);

export default ViewPostCommentsCollapsed;
