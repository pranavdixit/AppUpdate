import {createStore,applyMiddleware} from 'redux'
import app from '../reducers/RootReducer'
import thunk from 'redux-thunk'

let store = createStore(app,applyMiddleware(thunk))

export default store