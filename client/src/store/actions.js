import * as constants from '../helpers/constants';

export const FETCH_CLIENT_LIST_START = 'FETCH_CLIENT_LIST_START';
export const FETCH_CLIENT_LIST_SUCCESS = 'FETCH_CLIENT_LIST';
export const FETCH_CLIENT_LIST_FAIL = 'FETCH_CLIENT_LIST_FAIL';

export const CREATE_CLIENT_START = 'CREATE_CLIENT_START';
export const CREATE_CLIENT_SUCCESS = 'CREATE_CLIENT_SUCCESS';
export const CREATE_CLIENT_FAIL = 'CREATE_CLIENT_FAIL';

export const CREATE_CAR_START = 'CREATE_CAR_START';
export const CREATE_CAR_SUCCESS = 'CREATE_CAR_SUCCESS';
export const CREATE_CAR_FAIL = 'CREATE_CAR_FAIL';

const fetchClientsStart = () => ({
    type: FETCH_CLIENT_LIST_START
})
const fetchClientsFailed = payload => ({
    type: FETCH_CLIENT_LIST_FAIL,
    payload
})
const fetchClientsSuccess = payload => ({
    type: FETCH_CLIENT_LIST_SUCCESS,
    payload
})


const createClientStart = () => ({
    type: CREATE_CLIENT_START
})
const createClientSuccess = payload => ({
    type: CREATE_CLIENT_SUCCESS,
    payload
})
const createClientFail = payload => ({
    type: CREATE_CLIENT_FAIL,
    payload
})


const createCarStart = () => ({
    type: CREATE_CAR_START
})
const createCarSuccess = payload => ({
    type: CREATE_CAR_SUCCESS,
    payload
})
const createCarFailed = payload => ({
    type: CREATE_CAR_FAIL,
    payload
})


export const fetchClientsList = () => {
    return async (dispatch) => {
        dispatch(fetchClientsStart())
        let response = await fetch(`${constants.API_URL}/clients`)
        response = await response.json()
        if (response.error) {
            dispatch(fetchClientsFailed({
                error: response.error,
                message: 'There is no clients registered'
            }))
        } else {
            dispatch(fetchClientsSuccess({
                rows: response.clients.rows,
                results: response.clients.results
            }))
        }
    }
}



export const createClient = (params) => {
    return async (dispatch) => {
        dispatch(createClientStart())
        let response = await fetch(`${constants.API_URL}/clients/create`, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response = await response.json()
        if (response.error) {
            dispatch(createClientFail(response.message))
        } else {
            dispatch(createClientSuccess(response.client))
        }
    }
}


export const createCarInit = (params) => {
    return async (dispatch) => {
        dispatch(createCarStart())
        let response = await fetch(`${constants.API_URL}/cars/create`, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response = await response.json()
        if (response.error) {
            dispatch(createCarFailed(response.message))
        } else {
            dispatch(createCarSuccess(response.client))
        }
    }
}