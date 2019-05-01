import {INPUT_CHANGE, MAIL_STATUS, FLIP} from '../actions/formAction'


let initializeState = {
    name : "",
    email : "",
    phone : "",
    message : "",
    formClassName : "form-details",
    InputSmallclassName : "input-small",
    InputBigclassName : "input-big",
    InputButtonsclassName : "form-controllers",
    isFlipBack : false,
    isSent : false
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){
      case FLIP:
        let newFlipState = {...state}
        if(!newFlipState.isFlipBack){
          newFlipState.formClassName = "form-details flip-back"
          newFlipState.InputSmallclassName = "input-small hide"
          newFlipState.InputBigclassName = "input-big hide"
          newFlipState.InputButtonsclassName = "form-controllers hide"
        } 
        else{
          newFlipState.formClassName = "form-details flip-up"
          newFlipState.InputSmallclassName = "input-small show"
          newFlipState.InputBigclassName = "input-big show"
          newFlipState.InputButtonsclassName = "form-controllers show"
        }
        
        newFlipState.isFlipBack = !newFlipState.isFlipBack
        return newFlipState

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

