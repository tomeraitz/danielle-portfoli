export const SLIDER = 'images : slider'
export const SLIDER_BEHIND = 'bhindimages : slider'


export function slideImages(index){
    return {
        type: SLIDER,
        payload : index
    }

}