import {SLIDER } from '../actions/actions'
import images from '../../consts/images'

let initializeState = {
    images : images[0],
    index : 0,
  }

export default function moviesReducer (state=initializeState, {type, payload}){
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

       default:
          return state
      }
}

