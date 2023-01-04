import {add_task} from './actiontypes.js'
import { complete_task } from './actiontypes.js'
import { delete_task } from './actiontypes.js'
import { delete_all_task } from './actiontypes.js'

export const add_task_action = (payload) =>{
    return {
        type:add_task,
        payload:payload,

    }
}
export const complete_task_action = (payload) =>{
    return {
        type:complete_task,
        payload:payload,

    }
}
export const delete_task_action = (payload) =>{
    return {
        type:delete_task,
        payload:payload,

    }
}
export const delete_all_task_action = () =>{
    return {
        type:delete_all_task,
    }
}