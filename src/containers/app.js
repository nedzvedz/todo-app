import { connect } from 'react-redux';
import { setTodos } from '../actions/todos';
import App from '../components/app';
import db from '../services/indexed-db';

const mapDispatchToProps = (dispatch) => {
  return {
    onAppInit: () => {
      db.getTodos()
        .then(todos => dispatch(setTodos(todos)));
    }
  }
}

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App);

export default AppContainer;
