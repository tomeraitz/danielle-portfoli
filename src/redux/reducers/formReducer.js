import {INPUT_CHANGE, MAIL_STATUS} from '../actions/formAction'


let initializeState = {
    name : "",
    email : "",
    phone : "",
    message : "",
    isSent : false
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){

      case MAIL_STATUS:
        let newStateStatus = {...state}
        payload.includes("Message Sent OK")  ? newStateStatus.isSent = true : newStateStatus.isSent = false
        return newStateStatus

        case INPUT_CHANGE:
            let newStateInput = {...state}
            newStateInput[payload.name] = payload.value
            return newStateInput

       default:
          return state
      }
}

