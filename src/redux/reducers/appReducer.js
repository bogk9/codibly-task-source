import { actionTypes } from "../actions/actionTypes"

const initialState = {
    data: {},
    currentPage: 1,
    idFilter: 0,
    colors: true,
    pending: false
}

export const appReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.FETCH_STARTED:
            return {
                ...state,
                pending: true
            }
        case actionTypes.FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                pending: false
            }
        case actionTypes.FETCH_FAILED:
            return {
                ...state,
                pending: false
            }
        case actionTypes.SWITCH_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case actionTypes.SWITCH_COLOR:
            return {
                ...state,
                colors: !state.colors
            }
        case actionTypes.SET_FILTER:
            return {
                ...state,
                idFilter: action.payload
            }
        default:
            return {
                ...state
            }
    }
}