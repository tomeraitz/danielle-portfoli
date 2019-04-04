import {SLIDER, SLIDER_LEFT ,SLIDER_RIGHT,TOGGLE, CLASS_NAME,STOP_LOOP, CLASS_NAME_DROP} from '../actions/actions'
import images from '../../consts/images'

let initializeState = {
    images : images[0],
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
    istoggle : false
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){
        case TOGGLE:
            let newStateToogle = {...state}
            newStateToogle.istoggle = !newStateToogle.istoggle
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
                newStateSlider.images = images[0]
                newStateSlider.index = 0 
                return newStateSlider
            }
            else{
                newStateSlider.images = images[payload + 1]
                newStateSlider.index = payload + 1
                return newStateSlider
            }

        case SLIDER_LEFT:
            let newStateSliderL = {...state}
            if(payload >= 3){
                newStateSliderL.images = images[0]
                newStateSliderL.index = 0 
                return newStateSliderL
            }
            else{
                newStateSliderL.images = images[payload]
                newStateSliderL.index = payload
                return newStateSliderL
            }

        case SLIDER_RIGHT:
            let newStateSliderR = {...state}
            if(payload <= 0){
                newStateSliderR.images = images[3]
                newStateSliderR.index = 3 
                return newStateSliderR
            }
            else{
                newStateSliderR.images = images[payload]
                newStateSliderR.index = payload
                return newStateSliderR
            }

       default:
          return state
      }
}

