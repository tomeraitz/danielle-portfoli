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
        1 : "מרכז תרבות ופנאי רב גילי",
        0 : "Project 1"
    },
    thisProject2Ttitle : {
        1 : "תכנון ועיצוב פרויקט מגורים",
        0 : "Project 2"
    },
    thisProject4Ttitle : {
        1 :  `תכנון תוספת קומה בבניין מסחרי קיים`,
        0 : "Project 3"
    },
    thisProject3Ttitle : {
        1 : `תכנון תוספת בנייה על הגג של 65% משטח הגג`,
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
        1 : "דניאל שודרי",
        0 : "About Me"
    },
    
    thisAboutPageSubTitleBig1: {
        1 :   `ניסיון תעסוקתי`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageSubTitleBig2: {
        1 :   `השכלה`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
    thisAboutPageSubTitleBig3: {
        1 :   `מידע נוסף`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
    thisAboutPageSubTitle2: {
        1 :   `אדריכלות ובנין ערים בע"מ - הנדסאית אדריכלות`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageSubTitle3: {
        1 :   `פרילנאס - אדריכלית עיצוב פנים`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageSubTitle4: {
        1 :   `בית ספר גבוה להנדסה ועיצוב "שנקר" - תואר הנדסאי במסלול אדריכלות ועיצוב פנים`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
    thisAboutPageSubTitle5: {
        1 :   `תיכון "אוהלשם" - תלמידת תיכון`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
    thisAboutPageJobDes1: {
        1 :   `השתתפות מלאה בכל שלבי התכנון: הכנת סקיצות, תכניות הגשה מלאות, תכניות ביצוע הכוללות: תכניות, חתכים, חזיתות, רשימות,
                פרטים, רשימת כמויות. תכניות מכר והדמיות הכל בוצע בתכנת Revit`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
    thisAboutPageJobDes2: {
        1 :   `הובלת מספר פרויקטים במסגרת תמ"א 38 ,במהלכן הייתי אחראית על תכנון הרחבת הדירות אשר בוצעה על-ידי הוספת ממ"ד ומרפסת.
        כמו כן, ביצעתי תכנון לחיזוק המבנה, שיפוץ חדר המדרגות והוספת מעליות.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
    thisAboutPageJobDes3: {
        1 :   `השתתפתי בפרויקט תכנון בנייה בתהליך תמ"א 2/38 ,החל משלבי התכנון הראשוני של מעטפת ופנים הבניין, מיקום גרעין המדרגות
        והמעליות. כמו כן, הובלתי את התכנון ועיצוב הפנים של הדירות תוך הקפדה על הסטנדרטים הגבוהים ביותר. `,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
    thisAboutPageJobDes4: {
        1 :   `הגשת רעיון תכנוני למכרז עבור פרויקט חדשני להוספת קומה לבניין מסחרי קיים בפתח תקווה אשר תשמש כמלונית, תכנון ועיצוב
        המלונית היה תוך שילוב אלמנטים של חללי עבודה משותפים כדוגמת wework. `,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
    thisAboutPageJobDes5: {
        1 :   `תכנון והוצאת תוכנית אדריכלית עבור פרויקט מלונית בוטיק בת"א. תכנון המלונית בוצע תוך עמידה בדרישות הסניטאריות וכלל גם תכנון
        אדריכלי לחלל הפנים של המלונית.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
    thisAboutPageJobDes6: {
        1 :   `הובלת סידור ושרטוט תכניות עבודה עבור בניין מגורים חדש ברמת-גן, העבודה כללה בניית חוברת רשימות עבור עבודות אלומיניום נגרות
        ומסגרות.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },
    thisAboutPageJobDes7: {
        1 :   `במסגרת תפקידי עבדתי רבות מול מערכת רישוי זמין והמערכת המקוונת של עיריית ת"א – בקשה לתיקי מידע, עריכת בקשות להיתר. כמו
        כן, לטובת קבלת אישור עבור היתר בנייה עבדתי עם המערכת של פיקוד העורף.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes8: {
        1 :   `הובלת פרויקט תכנון ועיצוב עבור בית פרטי, אשר כלל עבודה מול קבלן הביצוע. הפרויקט כלל כתיבת תוכניות לביצוע, בחירת חומרים,
        פריסת ריצוף, תוכניות חשמל ופיקוח על תהליך הבנייה. כל אלו בשקיפות מלאה מול בעלי הבית תוך עמידה בסטנדרטים ובתקציב שנקבעו.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes9: {
        1 :   `תכנון והגשת תוכנית למתן היתר על-פי תכנית בניין ערים "ג" של תל אביב, עבור תוספת בנייה של %65 משטח הגג של בניין מגורים.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes10: {
        1 :   `ליווי אדריכלי לשיפוץ דירה קיימת תוך התמקדות בתכנון עיצוב הפנים של הדירה. התכנון האדריכלי כלל תוכנית חשמל, תאורה ועיצוב
        חדרי השינה, חדרי האמבטיה, סלון והמטבח.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes11: {
        1 :   `עבודה עם המעצב רן דבי בעיצוב שולחנות חג לתערוכת עיצוב בהשראת ספר הבישול של רות סירקיס במתחם דיזיין סנטר, בני-ברק.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes12: {
        1 :   `תכנון ועיצוב פרויקט מגורים-רחוב וושינגטון ת"א, במסגרת הלימודים, בהנחיית האדריכל עמנואל שטרן.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes13: {
        1 : `פרויקט גמר – "מרכז תרבות ופנאי רב-גילי" בהנחיית האדריכלית סימון פרידמן והאדריכלית מאיה טופול.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes14: {
        1 : `בגרות מלאה במגמות ביולוגיה וערבית`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes15: {
        1 : `שפות: עברית שפת אם, אנגלית שוטף.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes16: {
        1 : `כלים ותוכנות: Revit ,AutoCAD.`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes17: {
        1 : `מערכות: מערכת רישוי זמין, מערכת רישוי מקוון , ניהול פרויקטים-זיו, בינארית, מערכת לרישוי פיקוד העורף`,
        0 :  `Lorem ipsum dolor sit amet, velit scripta omittantur usu eu. 
              Eos an tantas vidisse euismod, usu eligendi scribentur ne. 
              No mea tale salutandi. Inani atomorum constituam his no, 
              an mea probatus adipisci.`
    },

    thisAboutPageJobDes18: {
        1 : `שירות צבאי: חיילת בתפקיד מסווג, משרד ראש הממשלה.`,
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
            if(payload === 9){
                newStateSlider.index = 0 
                return newStateSlider
            }
            else{
                newStateSlider.index = payload + 1
                return newStateSlider
            }

        case SLIDER_LEFT:
            let newStateSliderL = {...state}
            if(payload >= 9){
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
                newStateSliderR.index = 9 
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

