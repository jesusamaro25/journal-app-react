import { types } from "../types/types";
import { firebase, googleAuthprovider } from '../firebase/firebase.config';

export const startLoginEmailPassword = (email, password) => { //disparamos una accion que dispara otra accion
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'jesusamaro'))
        }, 3500);
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthprovider)
            .then(({ user }) => {
                dispatch(user.uid, user.displayName)
            })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})