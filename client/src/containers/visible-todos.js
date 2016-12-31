import { connect } from 'react-redux';
import TodoList from '../components/todo-list.jsx';
import FILTERS from '../constants/visibility-filters';
import { setTodos } from '../actions/todos';
import db from '../services/indexed-db';

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case FILTERS.SHOW_ALL:
      return todos;
    case FILTERS.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case FILTERS.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      db.toggleTodo(id)
        .then(todos => dispatch(setTodos(todos)));
    }
  }
}

const VisibleTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodos;
