import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import GetRandomQuote from '../containers/GetRandomQuote';
import GetWeather from '../containers/GetWeather';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <br />
    <GetRandomQuote />
    <br />
    <br />
    <GetWeather />
  </div>
);

export default App;
