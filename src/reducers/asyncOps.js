const asyncOps = (state = {}, action) => {
  // assumes all async actions start, end with REQUEST, RECEIVE:
  switch (true) {
    case /^REQUEST_/.test(action.type):
      return { loading: action.loading };
    case /^RECEIVE_/.test(action.type):
      return { loading: action.loading };
    default:
      return state;
  }
};

export default asyncOps;
