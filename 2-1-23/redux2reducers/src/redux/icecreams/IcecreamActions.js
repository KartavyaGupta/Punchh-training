import { BUY_ICECREAM,ADD_ICECREAM,RESET_ICECREAM } from "./IcecreamTypes"
export const buyicecream=()=>{
    return {
        type:BUY_ICECREAM,
    }
}
export const addicecream = () =>{
    return {
        type:ADD_ICECREAM,
    }
}
export const reseticecream = () =>{
    return {
        type:RESET_ICECREAM,
    }
}