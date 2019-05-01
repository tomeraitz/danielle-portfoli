import {SLIDER, SLIDER_LEFT ,SLIDER_RIGHT,TOGGLE, CLASS_NAME,STOP_LOOP, CLASS_NAME_DROP ,TOGGLE_ABOUT, TOGGLE_CONTACT, LOADING_PAGE} from '../actions/actions'
import images from '../../consts/images'

let initializeState = {
    images,
    index : 0,
    className : "",
    stopLoop : false,
    classNameDrop : {
        0 : "drop-items",
        1 : "drop-items-active"
    },
    dropIndex : false,
    toggleClass : {
        0 : ["inner-burger1" , "inner-burger2" , "inner-burger3"],
        1 : ["burger1" , "burger2" , "burger3"]
    },
    isToggleAbout : false,
    isToggleContact : false,
    istoggle : false,
    counter : 0,
    isloaded : false
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){

        case LOADING_PAGE:
            let newStateLoading = {...state}
            newStateLoading.isloaded = true
            return newStateLoading

        case TOGGLE_CONTACT:
            let newStateToogleContact = {...state}
            newStateToogleContact.isToggleContact = !newStateToogleContact.isToggleContact
            return newStateToogleContact

        case TOGGLE_ABOUT:
            let newStateToogleAbout = {...state}
            newStateToogleAbout.isToggleAbout = !newStateToogleAbout.isToggleAbout
            return newStateToogleAbout

        case TOGGLE:
            let newStateToogle = {...state}
            newStateToogle.istoggle = !newStateToogle.istoggle
            if(newStateToogle.istoggle && newStateToogle.isToggleAbout){
                newStateToogle.isToggleAbout = false
            }

            if(newStateToogle.isToggleContact && newStateToogle.isToggleContact){
                newStateToogle.isToggleContact = false
            }
            newStateToogle.counter += 1
            return newStateToogle
        
        case STOP_LOOP :
            let newStateLoop = {...state}
            newStateLoop.stopLoop = payload
            return newStateLoop
        
        case CLASS_NAME_DROP :
            let newStateClassDrop = {...state}
            newStateClassDrop.dropIndex = payload
            return newStateClassDrop

        case CLASS_NAME :
            let newStateClass = {...state}
            newStateClass.className = payload
            return newStateClass

        case SLIDER:
            let newStateSlider = {...state}
            if(payload === 3){
                newStateSlider.index = 0 
                return newStateSlider
            }
            else{
                newStateSlider.index = payload + 1
                return newStateSlider
            }

        case SLIDER_LEFT:
            let newStateSliderL = {...state}
            if(payload >= 3){
                newStateSliderL.index = 0 
                return newStateSliderL
            }
            else{
                newStateSliderL.index = payload
                return newStateSliderL
            }

        case SLIDER_RIGHT:
            let newStateSliderR = {...state}
            if(payload <= 0){
                newStateSliderR.index = 3 
                return newStateSliderR
            }
            else{
                newStateSliderR.index = payload
                return newStateSliderR
            }

       default:
          return state
      }
}

