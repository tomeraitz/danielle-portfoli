export const SLIDER = 'images : slider'
export const SLIDER_LEFT = 'images : sliderLeft'
export const SLIDER_RIGHT = 'images : sliderRight'
export const TOGGLE = 'menu : toggle'


export function toggle(){
    return {
        type: TOGGLE,
    }
}

export function slideImages(index){
    return {
        type: SLIDER,
        payload : index
    }

}

export function sliderLeft(index){
    return {
        type: SLIDER_LEFT,
        payload : index
    }

}

export function sliderRight(index){
    return {
        type: SLIDER_RIGHT,
        payload : index
    }

}


