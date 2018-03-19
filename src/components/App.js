import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import GetRandom from '../containers/GetRandom';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <br />
    <GetRandom />
  </div>
);

export default App;
