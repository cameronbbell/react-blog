import { connect } from "react-redux";
import PostComments from "../components/PostComments";

const mapStateToProps = state => ({
  numComments: state.comments.comments.length,
  visibility: state.comments.visibility
});

const ViewPostComments = connect(mapStateToProps)(PostComments);

export default ViewPostComments;
