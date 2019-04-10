export const CURRENT_PROJECT = 'projects : projects'


export function currentProject(index){
    return {
        type: CURRENT_PROJECT,
        payload : index
    }
}


