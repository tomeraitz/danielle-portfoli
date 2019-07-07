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
    sentAnser :{
      1 :  `מחכה לתשובה`,
      0 :  'Waiting For Answer'
    },
    display : 'block',
    error : '',
    isVaild : false,
    fromTtitle : {
      1 : "צור קשר",
      0 : "Contact Me"
    },
    fromSubTtitle : {
      1 : ` אם אתה מעוניין ליצור קשר אנא מלא את הפרטים מתחת או תשלח לי מייל ל 
      \ndanielle571990@gmail.com`,
      0 : `If you want to contact me, 
           send me your details by filling up the form below or 
          send an email to danielle571990@gmail.com`
    },
    fromNamePlaceHolder: {
      1 : "השם שלך",
      0 : "Your Name"
    },
    fromEmailPlaceHolder: {
      1 : "המייל שלך",
      0 : "Your Email"
    },
    fromPhonePlaceHolder: {
      1 : "הטלפון שלך",
      0 : "Your Phone"
    },
    fromMessagePlaceHolder: {
      1 : "הוסף פרטים נוספים",
      0 : "Message"
    },
    fromSubmit: {
      1 : "שלח",
      0 : "submit"
    },
    fromCancel: {
      1 : "ביטול",
      0 : "Cancel"
    },

  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){

      case VAILDTION:
        let newStateValidation = {...state}
         if(!newStateValidation.name){
            newStateValidation.error ={
              1 : "אנא כתוב את שמך",
              0 : 'Please entre your name'
            } 
            return newStateValidation
        }
        else if(!newStateValidation.email  && !newStateValidation.phone){
          newStateValidation.error ={
            1 : "אנא כתוב את הטלפון או המייל",
            0 :  'Please entre your mail or your phone'
          } 
          return newStateValidation
        }
        else if(!newStateValidation.phone && (!newStateValidation.email.includes('@') || !newStateValidation.email.includes('.'))){
          newStateValidation.error ={
            1 : "מייל לא תקין",
            0 :  'Mail is not vaild'
          }  
          return newStateValidation
        }
        else{
          newStateValidation.error = ''
          newStateValidation.isVaild = true
          return newStateValidation
        }
        
        

      case FLIP:
        let newFlipState = {...state}
        newFlipState.sentAnser = {
          1 :  `מחכה לתשובה`,
          0 :  'Waiting For Answer'
        }
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
          newStateStatus.sentAnser = {
            1 :  `הודעה נשלחה`,
            0 :  'Message was sent'
          }
          newStateStatus.display = "none"
        }
        else{
          newStateStatus.isSent = false
          newStateStatus.sentAnser = {
            1 :  `  הודעה לא נשלחה בבקשה תנסה שוב`,
            0 :  "Message was't sent, please try agian"
          }
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

