import * as constants from '../helpers/constants';

export const FETCH_CLIENT_LIST_START = 'FETCH_CLIENT_LIST_START';
export const FETCH_CLIENT_LIST_SUCCESS = 'FETCH_CLIENT_LIST';
export const FETCH_CLIENT_LIST_FAIL = 'FETCH_CLIENT_LIST_FAIL';


const fetchClientsStart = () => (
    {
        type: FETCH_CLIENT_LIST_START
    }
)

const fetchClientsFailed = (err) => (
    {
        type: FETCH_CLIENT_LIST_FAIL,
        payload: err
    }
)

const fetchClientsSuccess = (data) => (
    {
        type: FETCH_CLIENT_LIST_SUCCESS,
        payload: data
    }
)

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
