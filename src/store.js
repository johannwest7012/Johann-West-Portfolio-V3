import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { scroll1Reducer } from './reducers/scrollReducers'



const reducer = combineReducers({
    scroll1 : scroll1Reducer
})



const initalState = {
    scroll1 : false
}

const middleware = [thunk]

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store 