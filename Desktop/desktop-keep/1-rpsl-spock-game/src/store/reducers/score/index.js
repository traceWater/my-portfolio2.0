
const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case "WIN_MATCH":
      return (state + 1 );
    case "LOSE_MATCH":
      return (state - 1 );
    default:
      return state;
  }
};

export default scoreReducer;
