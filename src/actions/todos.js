export const actionTypes = {
  ADD_TODO: 'ADD_TODO'
};

export function addTodo(payload) {
  return {
    type: actionTypes.ADD_TODO,
    payload
  }
}