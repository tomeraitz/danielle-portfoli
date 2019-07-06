import {CURRENT_PROJECT, CHANGE_IMAGE, CHANGE_IMAGE_INDEX_LEFT, CHANGE_IMAGE_INDEX_RIGHT, CHANGE_MENUE} from '../actions/projectsActions'
import imag from '../../images/Missing-image-232x150.png'
import mainImag from '../../images/living-room-spatial-apartment-architecture-buildings-cbb521-1024-min.jpg'
let initializeState = {
    currentProject : -1,
    clssDescriptionMenu : "project-details",
    clssButtonnMenu : "detials-toggal",
    arrowDeriction : "right",
    isToggalRightOrLeft : false,
    project : [
        {
            indexOfImages : 0,
            title : {
                1 : "פרויקט 1",
                0 : "Project 1"
            },
            subTitle :{
                1 : "תת כותרת 1",
                0 : "sub title 1"
            },
            mainImage : mainImag,
            className : "item",
            gallery : [mainImag, imag, imag, imag,],
            description :{
                1 :     `לורם איפסום דולור סיט אמט,
                        קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, 
                        מרגשי ומרגשח. עמחליף לפרומי בלוף קינץ תתיח לרעח. 
                        לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.`,
                0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                      Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                      No mea tale salutandi. Inani atomorum constituam his no, 
                      an mea probatus adipisci.`
            }
        },
        {
            indexOfImages : 0,
            title : {
                1 : "פרויקט 2",
                0 : "Project 2"
            },
            subTitle :{
                1 : "תת כותרת 2",
                0 : "sub title 2"
            },
            mainImage : mainImag,
            className : "item",
            gallery : [mainImag, imag, imag],
            description :{
                1 :     `לורם איפסום דולור סיט אמט,
                        קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, 
                        מרגשי ומרגשח. עמחליף לפרומי בלוף קינץ תתיח לרעח. 
                        לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.`,
                0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                      Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                      No mea tale salutandi. Inani atomorum constituam his no, 
                      an mea probatus adipisci.`
            }
        },
        {
            indexOfImages : 0,
            title : {
                1 : "פרויקט 3",
                0 : "Project 3"
            },
            subTitle :{
                1 : "תת כותרת 3",
                0 : "sub title 3"
            },
            mainImage : mainImag,
            className : "item",
            gallery : [mainImag, imag, imag],
            description :{
                1 :     `לורם איפסום דולור סיט אמט,
                        קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, 
                        מרגשי ומרגשח. עמחליף לפרומי בלוף קינץ תתיח לרעח. 
                        לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.`,
                0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                      Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                      No mea tale salutandi. Inani atomorum constituam his no, 
                      an mea probatus adipisci.`
            }
        },
    ]
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){

        case CHANGE_MENUE:
            let newMenuState = {...state}
            if(payload){
                newMenuState.clssDescriptionMenu = "project-details slide-right-big-menu" 
                newMenuState.clssButtonnMenu = "detials-toggal slide-right-small-menu" 
                newMenuState.arrowDeriction = "left"
            }
            else{
                newMenuState.clssDescriptionMenu = "project-details slide-left-big-menu"
                newMenuState.clssButtonnMenu = "detials-toggal slide-left-small-menu" 
                newMenuState.arrowDeriction = "right"
            }
            
            newMenuState.isToggalRightOrLeft = payload
            return newMenuState


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

