export const expandComments = (id) => ({
  id: id,
  type: "EXPAND_COMMENTS"
});

export const commentsFinishedLoading = () => ({
  type: "COMMENTS_LOADED"
});
