import { APPNAME } from '../../lib/Utils'
export const GET_QUERY = APPNAME + '/query/GET_QUERY'

const initialStates = {
  query: {},
}

export default function reducer (state = initialStates, action) {
  switch (action.type) {
    case GET_QUERY:
      return {
        ...state,
        query: action.query
      }
      break;
    default:
      return state
      break;
  }
}
