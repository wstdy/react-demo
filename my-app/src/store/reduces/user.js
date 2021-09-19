const user = (user = [], action) => {
    switch(action.type) {
        case 'SET_USER_INFO':
            return [...user, action.value];
        default: return user;
    }
}
export default user;