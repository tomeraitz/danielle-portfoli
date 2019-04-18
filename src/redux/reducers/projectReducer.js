import {CURRENT_PROJECT} from '../actions/projectsActions'
import imag from '../../images/Missing-image-232x150.png'
import mainImag from '../../images/living-room-spatial-apartment-architecture-buildings-cbb521-1024-min.jpg'
let initializeState = {
    currentProject : -1,
    project : [
        {
            title : "Project 1",
            subTitle : "sub title 1",
            mainImage : mainImag,
            gallery : [imag, imag, imag],
            description : `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                           Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                           No mea tale salutandi. Inani atomorum constituam his no, 
                           an mea probatus adipisci.`
        },
        {
            title : "Project 2",
            subTitle : "sub title 2",
            mainImage : mainImag,
            gallery : [imag, imag, imag],
            description : `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                           Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                           No mea tale salutandi. Inani atomorum constituam his no, 
                           an mea probatus adipisci.`
        },
        {
            title : "Project 3",
            subTitle : "sub title 3",
            mainImage : mainImag,
            gallery : [imag, imag, imag],
            description : `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                           Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                           No mea tale salutandi. Inani atomorum constituam his no, 
                           an mea probatus adipisci.`
        },
    ]
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){

        case CURRENT_PROJECT:
            let newProjectState = {...state}
            newProjectState.currentProject = payload
            return newProjectState

       default:
          return state
      }
}

