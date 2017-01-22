import { connect } from 'react-redux';
import AddTodo from '../components/add-todo.jsx';
import { addTodo } from '../actions/todos';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodoClick: (text) => {
      dispatch(addTodo(text));
    }
  }
};

const AddTodoContainer = connect(
  null,
  mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;