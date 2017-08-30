import { createStore } from 'redux'
import changeNum from '../reducer/reducer.js'
let store=createStore(changeNum)
export default store;