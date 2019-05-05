import {INPUT_CHANGE, MAIL_STATUS, FLIP ,VAILDTION} from '../actions/formAction'


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
    isSent : false,
    sentAnser : 'Waiting For Answer',
    display : 'block',
    error : '',
    isVaild : false
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){

      case VAILDTION:
        let newStateValidation = {...state}
         if(!newStateValidation.name){
            newStateValidation.error = 'Please entre your name'
            return newStateValidation
        }
        else if(!newStateValidation.email  && !newStateValidation.phone){
          newStateValidation.error = 'Please entre your mail or your phone'
          return newStateValidation
        }
        else if(!newStateValidation.phone && (!newStateValidation.email.includes('@') || !newStateValidation.email.includes('.'))){
          newStateValidation.error = 'Mail is not vaild'
          return newStateValidation
        }
        else{
          newStateValidation.error = ''
          newStateValidation.isVaild = true
          return newStateValidation
        }
        
        

      case FLIP:
        let newFlipState = {...state}
        newFlipState.sentAnser = 'Waiting For Answer'
        if(!newFlipState.isFlipBack){
          newFlipState.formClassName = "form-details flip-back"
          newFlipState.InputSmallclassName = "input-small hide"
          newFlipState.InputBigclassName = "input-big hide"
          newFlipState.InputButtonsclassName = "form-controllers hide"
        } 
        else{
          newFlipState.name = ''
          newFlipState.email = ''
          newFlipState.phone = ''
          newFlipState.message = ''
          newFlipState.formClassName = "form-details flip-up"
          newFlipState.InputSmallclassName = "input-small show"
          newFlipState.InputBigclassName = "input-big show"
          newFlipState.InputButtonsclassName = "form-controllers show"
          newFlipState.isVaild = false
        }
        
        newFlipState.isFlipBack = !newFlipState.isFlipBack
        return newFlipState

      case MAIL_STATUS:
        let newStateStatus = {...state}
        if(payload.includes("Message Sent OK")){
          newStateStatus.isSent = true
          newStateStatus.sentAnser = 'Message was sent'
          newStateStatus.display = "none"
        }
        else{
          newStateStatus.isSent = false
          newStateStatus.sentAnser = "Message was't sent, please try agian"
          newStateStatus.display = "none"
        } 
        return newStateStatus

        case INPUT_CHANGE:
            let newStateInput = {...state}
            newStateInput[payload.name] = payload.value
            return newStateInput

       default:
          return state
      }
}

