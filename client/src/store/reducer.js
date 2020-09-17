import * as actions from './actions';

const initialState = {
    clients: [],
    loadingClients: false,
    errorClients: null,
    creatingClient: false,
    errorCreating: null,
    createCar: false,
    errorCar: null,
    addingFixCar: false,
    statusAddFixCar: null
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

    if (action.type === actions.CREATE_CLIENT_START) {
        return {
            ...state,
            creatingClient: true,
            errorCreating: null
        }
    } else if (action.type === actions.CREATE_CLIENT_SUCCESS) {
        return {
            ...state,
            clients: [...state.clients, action.payload],
            creatingClient: false
        }
    } else if (action.type === actions.CREATE_CLIENT_FAIL) {
        return {
            ...state,
            creatingClient: false,
            errorCreating: action.payload
        }
    }

    if (action.type === actions.CREATE_CAR_START) {
        return {
            ...state,
            createCar: true,
            errorCar: null
        }
    } else if (action.type === actions.CREATE_CAR_SUCCESS) {
        return {
            ...state,
            createCar: false
        }
    } else if (action.type === actions.CREATE_CAR_FAIL) {
        return {
            ...state,
            createCar: false,
            errorCar: action.payload
        }
    }

    if (action.type === actions.ADD_FIXCAR_START) {
        return {
            ...state,
            addingFixCar: true,
            statusAddFixCar: null
        }
    } else if (action.type === actions.ADD_FIXCAR_SUCCESS) {
        return {
            ...state,
            statusAddFixCar: action.payload,
            addingFixCar: false
        }
    } else if (action.type === actions.ADD_FIXCAR_FAIL) {
        return {
            ...state,
            addingFixCar: false,
            statusAddFixCar: action.payload
        }
    }

    return state;
}

export default reducer;
