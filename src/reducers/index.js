import { initialState } from '../states';
import { actionTypes } from '../actions';

let nextTodoId = 0;

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, {
          text: action.payload,
          id: nextTodoId++,
          completed: false
        }]
      });
    default:
      return state;
  }
}