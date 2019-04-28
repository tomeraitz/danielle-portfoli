import {CURRENT_PROJECT, CHANGE_IMAGE, CHANGE_IMAGE_INDEX_LEFT, CHANGE_IMAGE_INDEX_RIGHT} from '../actions/projectsActions'
import imag from '../../images/Missing-image-232x150.png'
import mainImag from '../../images/living-room-spatial-apartment-architecture-buildings-cbb521-1024-min.jpg'
let initializeState = {
    currentProject : -1,
    project : [
        {
            indexOfImages : 0,
            title : "Project 1",
            subTitle : "sub title 1",
            mainImage : mainImag,
            className : "item",
            gallery : [mainImag, imag, imag, imag,],
            description : `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                           Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                           No mea tale salutandi. Inani atomorum constituam his no, 
                           an mea probatus adipisci.`
        },
        {
            indexOfImages : 0,
            title : "Project 2",
            subTitle : "sub title 2",
            mainImage : mainImag,
            className : "item",
            gallery : [mainImag, imag, imag],
            description : `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                           Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                           No mea tale salutandi. Inani atomorum constituam his no, 
                           an mea probatus adipisci.`
        },
        {
            indexOfImages : 0,
            title : "Project 3",
            subTitle : "sub title 3",
            mainImage : mainImag,
            className : "item",
            gallery : [mainImag, imag, imag],
            description : `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                           Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                           No mea tale salutandi. Inani atomorum constituam his no, 
                           an mea probatus adipisci.`
        },
    ]
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){



        case CHANGE_IMAGE_INDEX_RIGHT:
            let newImagesStateRight = {...state}
            newImagesStateRight.project[payload].className = "fade-in-slider item"
            newImagesStateRight.project[payload].indexOfImages + 1 >= newImagesStateRight.project[payload].gallery.length -2 ?
            newImagesStateRight.project[payload].indexOfImages = 0 :
            newImagesStateRight.project[payload].indexOfImages++
            return newImagesStateRight


        case CHANGE_IMAGE_INDEX_LEFT:
            let newImagesStateLeft = {...state}
            newImagesStateLeft.project[payload].className = "fade-in-slider item"
            newImagesStateLeft.project[payload].indexOfImages - 1 < 0 ?
            newImagesStateLeft.project[payload].indexOfImages = newImagesStateLeft.project[payload].gallery.length -3 :
            newImagesStateLeft.project[payload].indexOfImages--
            return newImagesStateLeft

        case CHANGE_IMAGE:
            let newImagesState = {...state}
            newImagesState.project[payload.index].mainImage= payload.name
            return newImagesState

        case CURRENT_PROJECT:
            let newProjectState = {...state}
            newProjectState.currentProject = payload
            return newProjectState

       default:
          return state
      }
}

