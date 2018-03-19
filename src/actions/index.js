let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const requestRandom = category => ({
  type: 'REQUEST_RANDOM',
  category
});

export const receiveRandom = json => ({
  type: 'RECEIVE_RANDOM',
  json
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function fetchRandom(category = '') {
  return dispatch => {
    dispatch(requestRandom(category));
    return fetch(`https://quotes.rest/qod.json?category=${category} `, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => {
        const { author, quote } = json.contents.quotes[0];
        dispatch(receiveRandom(json));
        dispatch(addTodo(`${quote} -${author}`));
      });
  };
}
