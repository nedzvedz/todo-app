import { connect } from 'react-redux';
import TodoList from '../components/todo-list.jsx';
import FILTERS from '../constants/visibility-filters';

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

const VisibleTodos = connect(mapStateToProps)(TodoList);

export default VisibleTodos;
