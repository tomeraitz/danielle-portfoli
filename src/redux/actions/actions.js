import axios from 'axios';

export const SLIDER = 'images : slider'
export const SLIDER_LEFT = 'images : sliderLeft'
export const SLIDER_RIGHT = 'images : sliderRight'
export const CLASS_NAME = 'images : changeclassName'
export const TOGGLE = 'menu : toggle'
export const STOP_LOOP = 'images : stopLoop'
export const CLASS_NAME_DROP = 'nemu : changeclassNameDropDwon'
export const TOGGLE_ABOUT = 'pages : about'
export const TOGGLE_CONTACT = 'pages : contcat'
export const LOADING_PAGE = 'app : loading'
export const CHAGE_LANG = "app : language"

export function chngeLanguage() {
    return {
        type: CHAGE_LANG,
    }
}

export function chngeLoadStatus() {
    if (navigator.onLine && window.location.hostname !== 'localhost') {
        return async function (dispatch) {
            console.log("In chngeLoadStatus")
            await axios.get(`/appStarted`)
                .then(response => {
                    console.log("response : ", response)
                })
            dispatch({
                    type: LOADING_PAGE
                })
                .catch(error => {})
        }
    } else {
        return function (dispatch) {
            dispatch({
                type: LOADING_PAGE
            })

        }
    }
}



export function toggleContact() {
    return {
        type: TOGGLE_CONTACT,
    }
}

export function toggleAbout() {
    return {
        type: TOGGLE_ABOUT,
    }
}


export function changeclassNameDropDwon(index) {
    return {
        type: CLASS_NAME_DROP,
        payload: index
    }
}

export function stopLoop(isStop) {
    return {
        type: STOP_LOOP,
        payload: isStop
    }
}


export function changeclassName(classname) {
    return {
        type: CLASS_NAME,
        payload: classname
    }
}

export function toggle() {
    return {
        type: TOGGLE,
    }
}

export function slideImages(index) {
    return {
        type: SLIDER,
        payload: index
    }

}

export function sliderLeft(index) {
    return {
        type: SLIDER_LEFT,
        payload: index
    }

}

export function sliderRight(index) {
    return {
        type: SLIDER_RIGHT,
        payload: index
    }

}