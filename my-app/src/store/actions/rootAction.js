export const increment = (value) => ({ type: 'ADD_TODO', value })
 
export const incrementAsync = (value) => {
    return fn => {
        setTimeout(() => {
            fn({ type: 'ADD_TODO', value })
        }, 1000)
    }
}

export const decrement = (value) => ({ type: 'TOGGLE_TODO', value})

export const addUser = (value) => ({ type: 'ADD_USER', value})