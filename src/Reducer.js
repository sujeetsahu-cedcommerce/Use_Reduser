const reducer = (state, action) => {
    switch (action.type) {
      case "setData":
        let tempState = state;
        tempState[action.field] = action.payload;
        return { ...tempState };
      default:
        return state;
    }
  };