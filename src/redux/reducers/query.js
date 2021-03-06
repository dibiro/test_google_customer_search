import { APPNAME } from '../../lib/Utils'
export const GET_QUERY = APPNAME + '/query/GET_QUERY'
export const SET_QUERYS = APPNAME + '/query/SET_QUERYS'
export const REQUESTS = APPNAME + '/query/REQUESTS'
export const FAIL = APPNAME + '/query/FAIL'
export const SUCCESS = APPNAME + '/query/SUCCESS'

const initialStates = {
  query: {},
  querys: [],
  success: false,
  fail: false,
  loading: false
}

export default function reducer (state = initialStates, action) {
  switch (action.type) {
    case SET_QUERYS:
      return {
        ...state,
        querys: action.querys
      }
      break;
    case GET_QUERY:
      return {
        ...state,
        query: action.query
      }
      break;
    case REQUESTS:
      return {
        ...state,
        loading: true
      }
      break;
    case FAIL:
      return {
        ...state,
        fail: true,
        success: false,
        loading: false
      }
      break;
    case SUCCESS:
      return {
        ...state,
        fail: false,
        success: true,
        loading: false
      }
      break;
    default:
      return state
      break;
  }
}
