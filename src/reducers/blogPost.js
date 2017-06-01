const initialState = [
  {
    id: 1,
    title: "First Post!",
    postedBy: "Cameron",
    postedDate: "2017-04-01",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dapibus nibh, eget pulvinar risus. Duis rhoncus molestie lacus, vel efficitur eros suscipit sed. Fusce lobortis dui et metus faucibus venenatis. Quisque lacinia consequat felis vel blandit. Vivamus elit augue, convallis et ullamcorper sit amet, tempus at urna. Quisque leo justo, convallis et mollis ut, sagittis a ligula. Mauris interdum posuere tortor nec congue. Nunc porttitor pharetra magna nec lacinia. Donec venenatis arcu id massa consequat, malesuada scelerisque nisl maximus. Morbi sit amet rutrum tortor. Praesent sed iaculis nisi, id blandit turpis. Mauris euismod non lacus sit amet mollis. Vivamus ultricies mauris commodo ipsum congue imperdiet.\n\nDonec vel enim justo. Proin nisl diam, maximus vel placerat non, faucibus a lorem. Integer feugiat magna hendrerit nisl viverra, eu convallis mauris vehicula. Fusce porttitor in tortor nec sagittis. Mauris luctus mi in purus pretium tincidunt. Nam metus arcu, rhoncus et auctor ut, sodales consequat diam. Cras euismod id metus ut lobortis. Mauris imperdiet nunc quis mattis varius. Morbi eget nulla quis ipsum tempus lacinia. Quisque venenatis venenatis orci eu gravida. Suspendisse dignissim rutrum nulla, nec accumsan metus hendrerit quis. Nullam sagittis eros ut quam faucibus rutrum.\n\nSed vel sodales enim, ut posuere felis. Praesent sit amet ligula a risus dapibus tristique. Nunc hendrerit euismod rutrum. Morbi consectetur eros ac neque tincidunt egestas. Quisque et nisl a orci consequat lobortis at ac nisi. Morbi convallis ipsum ac erat viverra ornare. Integer at aliquam neque. Integer et quam eu risus porta vestibulum et sed mi. Duis eleifend aliquet ligula, porttitor imperdiet orci lobortis non. Nullam imperdiet tortor non neque mattis semper. Proin aliquet dolor sed enim bibendum, pharetra semper turpis ornare. Sed id eleifend leo. Nam consequat maximus pellentesque.",
    commentsVisibility: "COLLAPSED",
    comments: [
      {
        text: "First!!!1",
        postedDate: "2017-04-01",
        postedBy: "Peter Parker"
      },
      {
        text: "lollll",
        postedDate: "2017-04-06",
        postedBy: "Bruce Wayne"
      }
    ]
  }
];

const blogPost = (state = initialState, action) => {
  switch (action.type) {
    case "EXPAND_COMMENTS":
      const index = state.findIndex(b => b.id === action.id);
      const updatedBlog = {
        ...state[index],
        commentsVisibility: "VISIBLE"
      };

      return [
        ...state.slice(0, index),
        updatedBlog,
        ...state.slice(index + 1, state.length)
      ];
    default:
      return state;
  }
};

export default blogPost;
