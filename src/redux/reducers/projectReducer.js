import {CURRENT_PROJECT, CHANGE_IMAGE, CHANGE_IMAGE_INDEX_LEFT, CHANGE_IMAGE_INDEX_RIGHT, CHANGE_MENUE ,OPEN_POPUP} from '../actions/projectsActions'


import imgProject1 from '../../images/graduation-project/2-min.jpg'
import imgProject2 from '../../images/graduation-project/3-min.jpg'
import imgProject3 from '../../images/graduation-project/4-min.jpg'
import imgProject4 from '../../images/graduation-project/5-min.jpg'
import imgProject5 from '../../images/graduation-project/6-min.jpg'
import imgProject6 from '../../images/graduation-project/7-min.jpg'
import imgProject7 from '../../images/graduation-project/8-min.jpg'
import imgProject8 from '../../images/graduation-project/9-min.jpg'
import imgProject9 from '../../images/graduation-project/10-min.jpg'
import imgProject10 from '../../images/graduation-project/11-min.jpg'
import imgProject11 from '../../images/graduation-project/12-min.jpg'
import imgProject12 from '../../images/graduation-project/13-min.jpg'
import imgProject13 from '../../images/graduation-project/14-min.png'
import imgProject14 from '../../images/graduation-project/14a-min.png'
import imgProject15 from '../../images/graduation-project/15-min.png'
import imgProject16 from '../../images/graduation-project/16-min.png'
import imgProject17 from '../../images/graduation-project/17-min.png'
import imgProject18 from '../../images/graduation-project/18-min.png'
import imgProject19 from '../../images/graduation-project/19-min.png'

import imgWashington1 from '../../images/washington-project/1-1-min.jpg'
import imgWashington2 from '../../images/washington-project/2-1-min.jpg'
import imgWashington3 from '../../images/washington-project/3-1-min.jpg'
import imgWashington4 from '../../images/washington-project/4-1-min.jpg'

import imgRoof1 from '../../images/home-roof/1-1-min.jpg'
import imgRoof2 from '../../images/home-roof/2-1-min.jpg'

import imgHotel1 from '../../images/hotel/1-1-min.png'
import imgHotel2 from '../../images/hotel/2-1-min.png'
import imgHotel3 from '../../images/hotel/3-1-min.jpg'
import imgHotel4 from '../../images/hotel/4-1-min.jpg'
import imgHotel5 from '../../images/hotel/5-1-min.jpg'

let initializeState = {
    currentProject : -1,
    clssDescriptionMenu : "project-details",
    clssButtonnMenu : "detials-toggal",
    arrowDeriction : "right",
    isToggalRightOrLeft : false,
    popUpToggal : false,
    project : [
        {
            indexOfImages : 0,
            title : {
                1 : "מרכז תרבות ופנאי רב גילי",
                0 : "Project 1"
            },
            subTitle :{
                1 : "פרויקט גמר",
                0 : "sub title 1"
            },
            mainImage : imgProject1,
            className : "item",
            gallery : [imgProject1, imgProject2, imgProject3, imgProject4, imgProject5, imgProject6, imgProject7, imgProject8, imgProject9, imgProject10,imgProject11, imgProject12, imgProject13, imgProject14, imgProject15, imgProject16, imgProject17, imgProject18, imgProject19],
            description :{
                1 :    `מרכז תרבות ופנאי רב גילי מהווה מרכז תרבות העשרה ופנאי בו מתקיימות פעילויות מגוונות לאוכלוסיה בכל גיל. במרכז פועלים לפי האמונה כי הגיל השלישי הנו הגיל בו היכולת והזמן סוף כל סוף נפגשים.
                המרכז יהווה מקום לטיפוח יכולת הגשמה עצמית, העשרת ידע, נגישות לכל, מבחר תכנים תרבותיים ושפע הרצאות וחוגים.
                המרכז משלב גלריה בעלת חלל מרכזי, חדשני ומעוצב להצגת תערוכות תחמוני האומנות השונים. 
                המבנה מתוכנן על פי עקרונות אקולוגים, האור מהווה את אחד המרכיבים החשובים הקשורים בשיקולי תכנון המבנה. היכרות והבנה של מסלולי התנועה של האור, מאפשרים ליישם בכל חזית של הבניין פתרון תכנוני מתאים.
                `,
                0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                      Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                      No mea tale salutandi. Inani atomorum constituam his no, 
                      an mea probatus adipisci.`
            }
        },
        {
            indexOfImages : 0,
            title : {
                1 : `תכנון ועיצוב פרויקט מגורים`,
                0 : "Project 2"
            },
            subTitle :{
                1 : `שדרות וושינגטון ת"א`,
                0 : "sub title 2"
            },
            mainImage : imgWashington1,
            className : "item",
            gallery : [imgWashington1, imgWashington2, imgWashington3, imgWashington4],
            description :{
                1 :    `תכנון פרויקט מגורים במסגרת הלימודים האקדמיים.
                מבנה בעל 4 קומות , בו מתוכננים 4 דירות, 
                שילוב חנות סטודיו בקומת המרתף ומשרד בקומת הקרקע בצמוד ללובי הכניסה
                `,
                0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                      Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                      No mea tale salutandi. Inani atomorum constituam his no, 
                      an mea probatus adipisci.`
            }
        },
        {
            indexOfImages : 0,
            title : {
                1 : `תכנון תוספת בנייה על הגג של 65% משטח הגג`,
                0 : "Project 3"
            },
            subTitle :{
                1 :`בניין מגורים ברחוב משה סנה ת"א`,
                0 : "sub title 3"
            },
            mainImage : imgRoof1,
            className : "item",
            gallery : [imgRoof1, imgRoof2],
            description :{
                1 :    `תכנון תוכניות הגשה להיתר,
                עפ"י תכנית בניין ערים "ג" בניה על גגות
                `,
                0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
                      Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
                      No mea tale salutandi. Inani atomorum constituam his no, 
                      an mea probatus adipisci.`
            }
        },
        {
            indexOfImages : 0,
            title : {
                1 : `תכנון תוספת קומה בבניין מסחרי קיים`,
                0 : "Project 4"
            },
            subTitle :{
                1 : "מלונית בפתח תקווה",
                0 : "sub title 4"
            },
            mainImage : imgHotel1,
            className : "item",
            gallery : [imgHotel1,imgHotel2,imgHotel3,imgHotel4,imgHotel5],
            description :{
                1 :     `תכנון ועיצוב משלב ראשוני, הצגת רעיון תכנוני למכרז.
                תכנון של שילוב אלמנטים –בין מלונית ואיזור סביבת עבודה wework
                `,
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

            case OPEN_POPUP:
                let newPopUpState = {...state}
                newPopUpState.popUpToggal = payload
                return newPopUpState


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

