import React from 'react';
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

const GetRandom = ({ dispatch }) => {
  return (
    <button type="submit" onClick={() => dispatch(fetchRandom())}>
      Get Random Quote
    </button>
  );
};

export default connect()(GetRandom);
