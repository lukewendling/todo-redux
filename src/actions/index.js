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

export const requestRandomQuote = category => ({
  type: 'REQUEST_RANDOM',
  category,
  loading: true
});

export const receiveRandomQuote = json => ({
  type: 'RECEIVE_RANDOM',
  json,
  loading: false
});

export const requestWeather = searchTerm => ({
  type: 'REQUEST_WEATHER',
  searchTerm,
  loading: true
});

export const receiveWeather = json => ({
  type: 'RECEIVE_WEATHER',
  json,
  loading: false
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function fetchRandomQuote(category = '') {
  return dispatch => {
    dispatch(requestRandomQuote(category));
    return fetch(`https://quotes.rest/qod.json?category=${category} `, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => {
        const { author, quote } = json.contents.quotes[0];
        dispatch(receiveRandomQuote(json));
        dispatch(addTodo(`${quote} -${author}`));
      });
  };
}

function kToF(k) {
  return parseInt(k * (9 / 5) - 459.67, 10);
}

export function fetchWeather(searchTerm = '') {
  return dispatch => {
    dispatch(requestWeather(searchTerm));
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?APPID=${
        process.env.REACT_APP_OWM_API_KEY
      }&q=${searchTerm},us`,
      {
        method: 'GET'
      }
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        const { weather, main } = json;
        dispatch(receiveWeather(json));
        dispatch(
          addTodo(
            `${searchTerm} : ${weather[0].description} : ${kToF(main.temp)} °F`
          )
        );
      });
  };
}
