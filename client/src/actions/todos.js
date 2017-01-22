import db from '../services/indexed-db';

export const actionTypes = {
  SET_TODOS: 'SET_TODOS'
};

export function getTodos() {
  return (dispatch) => {
    db.getTodos()
      .then(todos => {
        if (!todos) {
          todos = [];
        }
        dispatch(setTodos(todos));
      });
  }
}

export function addTodo(text) {
  return (dispatch) => {
    db.addTodo(text)
      .then(todos => dispatch(setTodos(todos)));
  }
}

export function toggleTodo(id) {
  return (dispatch) => {
    db.toggleTodo(id)
      .then(todos => dispatch(setTodos(todos)));
  }
}

export function setTodos(payload) {
  return {
    type: actionTypes.SET_TODOS,
    payload
  }
}
