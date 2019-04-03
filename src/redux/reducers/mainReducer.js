import {SLIDER, SLIDER_LEFT ,SLIDER_RIGHT } from '../actions/actions'
import images from '../../consts/images'

let initializeState = {
    images : images[0],
    index : 0,
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){

        case SLIDER:
            if(payload === 3){
                state.images = images[0]
                state.index = 0 
                return state
            }
            else{
                state.images = images[payload + 1]
                state.index = payload + 1
                return state
            }

        case SLIDER_LEFT:
            if(payload >= 3){
                state.images = images[0]
                state.index = 0 
                return state
            }
            else{
                state.images = images[payload]
                state.index = payload
                return state
            }

        case SLIDER_RIGHT:
            if(payload <= 0){
                state.images = images[3]
                state.index = 3 
                return state
            }
            else{
                state.images = images[payload]
                state.index = payload
                return state
            }

       default:
          return state
      }
}

