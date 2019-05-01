import axios from 'axios';
export const INPUT_CHANGE = 'inputs : inputs'
export const MAIL_STATUS = 'inputs : mail'



export function sendToMail(mail){
    return function(dispatch){
          axios.post(`https://mail-tomer-api.herokuapp.com/index.php` , mail)
          .then(response => {
             dispatch({type : MAIL_STATUS ,payload: response.data})
             
          })
          .catch(error => {
          console.log(error);
          }); 
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


