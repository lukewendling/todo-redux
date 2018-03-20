import React from 'react';
import { connect } from 'react-redux';
import { fetchRandomQuote } from '../actions';

const GetRandomQuote = ({ dispatch }) => {
  return (
    <button type="submit" onClick={() => dispatch(fetchRandomQuote())}>
      Get Random Quote
    </button>
  );
};

export default connect()(GetRandomQuote);
