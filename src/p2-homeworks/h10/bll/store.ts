import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
loading: loadingReducer,

})

const store = createStore(reducers)

export default store

export type RootState = ReturnType<typeof store.getState>
//
// @ts-ignore
window.store = store // for dev
