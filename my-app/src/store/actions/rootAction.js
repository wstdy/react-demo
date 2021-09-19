import http from '../../http';
import jwtDecode from 'jwt-decode';

export const login = (form) => {
    return dispatch => {
        return http.post('login', {...form}).then((res) => console.log('res', res));
    }
}

export const setUserInfo = (value) => ({type: 'SET_USER_INFO', value: jwtDecode(value)})

export const increment = (value) => ({ type: 'ADD_TODO', value })

export const decrement = (value) => ({ type: 'TOGGLE_TODO', value})

export const initUser = (value) => {
    return dispatch => {
        dispatch({type: 'ADD_TODO', value})
    }
}

export const addUser = (value) => ({ type: 'ADD_USER', value})