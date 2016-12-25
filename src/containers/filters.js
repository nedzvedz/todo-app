import { connect } from 'react-redux';
import { setFilter } from '../actions/visibility-filter';
import VisibilityFilters from '../components/visibility-filters.jsx';

const mapStateToProps = (state) => {
  return {
    activeFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterSelection: (filterType) => {
      dispatch(setFilter(filterType));
    }
  }
}

const Filters = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters);

export default Filters;
