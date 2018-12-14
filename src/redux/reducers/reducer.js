import {combineReducers} from 'redux'
import controler from './controler'
import translate from './translate'
import query from './query'


const appReducer = combineReducers({
    controler,
    translate,
    query,
})


const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer
