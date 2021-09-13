export const increment = (value) => {return { type: 'ADD_TODO', value }}
 
export const incrementAsync = (value) => {
    return fn => {
        setTimeout(() => {
            fn({ type: 'ADD_TODO', value })
        }, 1000)
    }
}

export const decrement = (value) => {return { type: 'TOGGLE_TODO', value}}

export const addUser = (value) => {return { type: 'ADD_USER', value}}