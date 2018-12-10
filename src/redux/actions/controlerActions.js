import {
  OPEN_DRAWER,
} from '../reducers/controler'
import { store } from '../store'

export function toggleModalOpenDrawer () {
  const storeNow = store.getState()
  const openDrawer = storeNow.controler.openDrawer
  return {
    type: OPEN_DRAWER,
    openDrawer: !openDrawer
  }
}
