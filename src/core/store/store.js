import {createStore,applyMiddleware} from 'redux'
import app from '../reducers/RootReducer'
import { middleware as reduxMiddleware } from "./middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";

var store = createStore(app,applyMiddleware(reduxMiddleware, thunk, logger))

export default store