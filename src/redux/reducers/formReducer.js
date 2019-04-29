import {INPUT_CHANGE} from '../actions/formAction'


let initializeState = {
    name : "",
    email : "",
    phone : "",
    message : ""
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){

        case INPUT_CHANGE:
            let newStateInput = {...state}
            newStateInput[payload.name] = payload.value
            return newStateInput

       default:
          return state
      }
}

