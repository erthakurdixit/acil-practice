import { legacy_createStore } from 'redux'
import {shopReducer} from './reducers'
// import {composeWithDevTools} from 'redux-devtools-extension'



const store =legacy_createStore(shopReducer)

export default store