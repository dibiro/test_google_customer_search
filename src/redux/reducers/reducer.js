import {combineReducers} from 'redux'
import controler from './controler'
import translate from './translate'


const appReducer = combineReducers({
    controler,
    translate,
})


const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer
