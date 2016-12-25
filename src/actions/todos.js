export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
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
