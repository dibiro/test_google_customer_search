import { GET_QUERY, SUCCESS, FAIL, REQUESTS, SET_QUERYS } from '../reducers/query'
import { store } from '../store'
import { URL_CUSTOMER_SEARCH } from '../../lib/Utils'

export function getQuery(query) {
  return (dispatch) => {
    dispatch({
      type: REQUESTS,
    })
    fetch(URL_CUSTOMER_SEARCH + '&q=' + query.fullText, {
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
          query: {...query, query: responseJson}
        })
        if (responseJson.items && responseJson.items.length > 3) {
          const storeNow = store.getState()
          var querys = storeNow.query.querys
          if (querys) {
            let pushNew = true
            querys = querys.map(function(simpleQuery){
              if (simpleQuery.fullName === query.fullName){
                simpleQuery = {...query, query: responseJson}
                pushNew = false
              }
              return simpleQuery
            })
            if (pushNew){
              querys.push({...query, query: responseJson})
            }
          } else {
            querys = [{...query, query: responseJson}]
          }
          dispatch({
            type: SET_QUERYS,
            querys: querys
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: FAIL,
        })
    })
  }
}

export function jutSetQuery(query) {
  return {
    type: GET_QUERY,
    query: query
  }
}
  