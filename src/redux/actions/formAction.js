import axios from 'axios';
export const INPUT_CHANGE = 'inputs : inputs'
export const MAIL_STATUS = 'inputs : mail'
export const FLIP = 'form : animation'
export const VAILDTION = 'form : vaildation'


export function sendToMail(mail){
    return  function(dispatch){
        let dataMail = JSON.stringify(mail)
          axios.post(`https://mail-tomer-api.herokuapp.com/index.php/danielleApi` , dataMail)
          .then(response => {
              console.log("response.data : ", response.data)
             dispatch({type : MAIL_STATUS ,payload: response.data})
          })
          .catch(error => {
          console.log(error);
          }); 
    }

}

export function validation(){
    return {
        type: VAILDTION,
    }
}

export function flip(){
    return {
        type: FLIP,
    }
}

export function MailStatus(status){
    return {
        type: MAIL_STATUS,
        payload: status
    }
}

export function changeInput(inputDetilas){
    return {
        type: INPUT_CHANGE,
        payload : inputDetilas
    }
    
}


