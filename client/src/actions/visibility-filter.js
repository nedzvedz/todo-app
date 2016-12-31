export const actionTypes = {
  SET_FILTER: 'SET_FILTER'
};

export function setFilter(payload) {
  return {
    type:actionTypes.SET_FILTER,
    payload
  }
}