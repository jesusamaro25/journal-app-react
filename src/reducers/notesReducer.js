import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.uiSetError:
        //     return {
        //         ...state,
        //         error: action.payload
        //     }
        // case types.uiRemoveError:
        //     return {
        //         ...state,
        //         error: null
        //     }
        // case types.uiStartLoading:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        default:
            return state;
    }
}