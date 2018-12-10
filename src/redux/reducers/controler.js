import { APPNAME } from '../../lib/Utils'
export const OPEN_DRAWER = APPNAME + '/controler/OPEN_DRAWER'

const initialStates = {
  openDrawer: false,
}

export default function reducer (state = initialStates, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        openDrawer: action.openDrawer
      }
      break;
    default:
      return state
      break;
  }
}
