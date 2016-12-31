import { connect } from 'react-redux';
import AddTodo from '../components/add-todo.jsx';
import db from '../services/indexed-db';
import { setTodos } from '../actions/todos';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddTodoClick: (text) => {
      db.addTodo(text)
        .then(todos => dispatch(setTodos(todos)));      
    }
  }
}

const AddTodoContainer = connect(
  null,
  mapDispatchToProps
)(AddTodo)

export default AddTodoContainer;