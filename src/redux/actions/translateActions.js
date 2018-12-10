import { SET_LOCATION, fullTraslate } from '../reducers/translate'
import { store } from '../store'

export function setLocation (location) {
  return {
    type: SET_LOCATION,
    location: location,
    translate: fullTraslate[location]
  }
}
