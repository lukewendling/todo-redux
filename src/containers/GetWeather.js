import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import SearchBox from '../components/SearchBox';

const mapStateToProps = (state, ownProps) => {
  return {
    label: state.asyncOps.loading ? 'Loading...' : 'Get Weather',
    placeholder: 'Boston, MA'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  doSearch: term => dispatch(fetchWeather(term))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
