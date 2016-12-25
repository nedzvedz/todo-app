import { connect } from 'react-redux';
import TodoList from '../components/todo-list.jsx';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const VisibleTodos = connect(mapStateToProps)(TodoList);

export default VisibleTodos;
