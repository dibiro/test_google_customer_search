import { GET_QUERY, SUCCESS, FAIL, REQUESTS } from '../reducers/query'
import { store } from '../store'
import { URL_CUSTOMER_SEARCH } from '../../lib/Utils'

export function getQuery(query) {
  return (dispatch) => {
    dispatch({
      type: REQUESTS,
    })
    fetch(URL_CUSTOMER_SEARCH + '&q=' + query, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        }
    }).then((response) => response.json())
    .then((responseJson) => {
        dispatch({
          type: SUCCESS,
        })
        dispatch({
          type: GET_QUERY,
          query: responseJson
        })
      })
      .catch((error) => {
        dispatch({
          type: FAIL,
        })
    })
  }
}
  