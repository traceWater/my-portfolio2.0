const viewRulesReducer = (state = false, action) => {
  switch(action.type) {
    case 'VISIBLE_RULES':
      return (true);
    case 'HIDDEN_RULES':
      return (false);
    default:
      return state;
  }
};

export default viewRulesReducer;
