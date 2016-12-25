import initialTodosState from '../states/todos';
import { actionTypes } from '../actions/todos';

let nextTodoId = 0;

function todos(state = initialTodosState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, {
        text: action.payload,
        id: nextTodoId++,
        completed: false
      }];
    case actionTypes.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
}

export default todos;
