const count = (state = 10, action) => {
    console.log(state, action);
    switch(action.type) {
        case 'ADD_TODO': return state + action.value;
        case 'TOGGLE_TODO': return state - action.value;
        default: return state;
    }
}
export default count;