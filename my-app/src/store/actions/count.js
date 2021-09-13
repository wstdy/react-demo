
export const increment = (value) => {
  return { type: 'ADD_TODO', value}
}

export const decrement = (value) => {
  return {type: 'TOGGLE_TODO', value}
}