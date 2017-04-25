const initialState = {
  visibility: "COLLAPSED",
  comments: ["First!", "ACTUALLY, by your logic I..."]
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case "EXPAND_COMMENTS":
      return {
        ...state,
        visibility: "LOADING"
      };
    case "COMMENTS_LOADED":
      return {
        ...state,
        visibility: "LOADED"
      }
    default:
      return state;
  }
};

export default comments;
