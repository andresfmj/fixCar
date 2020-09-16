import * as actions from './actions';

const initialState = {
    clients: [],
    loadingClients: false,
    errorClients: null
}

const reducer = (state = initialState, action) => {
    if (action.type === actions.FETCH_CLIENT_LIST_START) {
        return {
            ...state,
            loadingClients: true
        }
    } else if (action.type === actions.FETCH_CLIENT_LIST_SUCCESS) {
        return {
            ...state,
            loadingClients: false,
            clients: action.payload.results,
            errorClients: null
        }
    } else if (action.type === actions.FETCH_CLIENT_LIST_FAIL) {
        return {
            ...state,
            loadingClients: false,
            errorClients: action.payload.message
        }
    }
    return state;
}

export default reducer;
