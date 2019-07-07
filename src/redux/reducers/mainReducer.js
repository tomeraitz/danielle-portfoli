import {SLIDER, SLIDER_LEFT ,SLIDER_RIGHT,TOGGLE, CLASS_NAME,STOP_LOOP, CLASS_NAME_DROP ,TOGGLE_ABOUT, TOGGLE_CONTACT, LOADING_PAGE, CHAGE_LANG} from '../actions/actions'
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
    isloaded : false,
    thisHeActive : true,
    thisEnActive : false,
    thisMenuTtitle : {
        1 : "תפריט",
        0 : "Menu"
    },
    thisBackTtitle : {
        1 : "אחורה",
        0 : "Back"
    },
    thisProjectsTtitle : {
        1 : "פרויקטים",
        0 : "Projects"
    },
    thisProject1Ttitle : {
        1 : "מרכז תרבות ופנאי רב גילי-פרויקט גמר",
        0 : "Project 1"
    },
    thisProject2Ttitle : {
        1 : "פרויקט 2",
        0 : "Project 2"
    },
    thisProject3Ttitle : {
        1 : "פרויקט 3",
        0 : "Project 3"
    },
    thisAboutTtitle : {
        1 : "אודות",
        0 : "About"
    },
    thisContactTtitle : {
        1 : "צור קשר",
        0 : "Contact"
    },
    thisAboutPageTitle : {
        1 : "קצת עלי",
        0 : "About Me"
    },
    thisAboutPageDes: {
        1 :     `לורם איפסום דולור סיט אמט,
                קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, 
                מרגשי ומרגשח. עמחליף לפרומי בלוף קינץ תתיח לרעח. 
                לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
  }

export default function mainReducer (state=initializeState, {type, payload}){
    switch(type){

        case CHAGE_LANG:
            let newStateLang = {...state}
            if(newStateLang.thisHeActive){
                newStateLang.thisHeActive = false;
                newStateLang.thisEnActive =true
            }
            else{
                newStateLang.thisHeActive = true;
                newStateLang.thisEnActive =false 
            }
            return newStateLang

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

