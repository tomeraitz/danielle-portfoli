export const CURRENT_PROJECT = 'projects : projects'
export const CHANGE_IMAGE = 'projects : images'
export const CHANGE_IMAGE_INDEX_LEFT = 'projects : imagesLeft'
export const CHANGE_IMAGE_INDEX_RIGHT= 'projects : imagesRight'
export const CHANGE_MENUE = 'projects : menueAction'

export function changeMenu(isRight){
    return {
        type: CHANGE_MENUE,
        payload : isRight
    }
    
}

export function changeImageIndexRight(index){
    return {
        type: CHANGE_IMAGE_INDEX_RIGHT,
        payload : index
    }
    
}

export function changeImageIndexLeft(index){
    return {
        type: CHANGE_IMAGE_INDEX_LEFT,
        payload : index
    }
}

export function changeCurrentImage(imageDetails){
    return {
        type: CHANGE_IMAGE,
        payload : imageDetails
    }
}

export function currentProject(index){
    return {
        type: CURRENT_PROJECT,
        payload : index
    }
}


