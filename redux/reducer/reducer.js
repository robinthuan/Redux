
import { combineReducers } from 'redux'
import {
    INCREASE_NUMBER,
    DECREASE_NUMBER,
} from '../action/actions.js'
const defaultState={ value:40 }
function changeNumber(state=defaultState,action)
{
   switch(action.type)
   {
       case INCREASE_NUMBER:
       return { value:state.value + 1 }
       case DECREASE_NUMBER:
       return { value:state.value - 1}
      default :return state;
   }

}

export default changeNumber;