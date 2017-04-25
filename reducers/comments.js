const comments = (state = false, action) => {
  switch (action.type) {
    case "LOAD_COMMENTS":
      return true;
    default:
      return state;
  }
};

export default comments;
