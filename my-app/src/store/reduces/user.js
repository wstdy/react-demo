const user = (user = [], action) => {
    switch(action.type) {
        case 'ADD_USER':
            return [...user, action.value];
        default: return user;
    }
}
export default user;