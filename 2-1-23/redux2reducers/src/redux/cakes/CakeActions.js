import { ADD_CAKE, BUY_CAKE, RESET_CAKE } from "./CakeTypes"
export const buycake=()=>{
    return {
        type:BUY_CAKE,
    }
}
export const addcake=()=>{
    return {
        type:ADD_CAKE,
    }
}
export const resetcake=()=>{
    return {
        type:RESET_CAKE,
    }
}