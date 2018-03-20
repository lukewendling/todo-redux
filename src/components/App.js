import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import GetRandomQuote from '../containers/GetRandomQuote';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <br />
    <GetRandomQuote />
  </div>
);

export default App;
