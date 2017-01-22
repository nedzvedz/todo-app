import { connect } from 'react-redux';
import { getTodos } from '../actions/todos';
import App from '../components/app';

const mapDispatchToProps = (dispatch) => {
  return {
    onAppInit: () => {
      dispatch(getTodos());
    }
  };
};

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App);

export default AppContainer;
