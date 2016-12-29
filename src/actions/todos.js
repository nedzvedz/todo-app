export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_TODOS: 'SET_TODOS'
};

export function addTodo(payload) {
  return {
    type: actionTypes.ADD_TODO,
    payload
  }
}

export function toggleTodo(payload) {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload
  }
}

export function setTodos(payload) {
  return {
    type: actionTypes.SET_TODOS,
    payload
  }
}
