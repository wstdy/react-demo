const count = (state = 10, action) => {
    switch(action.type) {
        case 'ADD_TODO': return state + action.value;
        case 'TOGGLE_TODO': return state - action.value;
        default: return state;
    }
}
export default count;